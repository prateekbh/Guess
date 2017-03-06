import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button, Dialog} from 'preact-mdl';
import {route} from 'preact-router';
import Splash from '../Splash/Splash.jsx';
import Header from '../Header/Header.jsx';
import * as wordActions from '../../actions/word-actions';
import * as gameActions from '../../actions/game-actions';
import PreviewTiles from '../PreviewTiles/PreviewTiles.jsx';
import GuessedWord from '../GuessedWord/GuessedWord.jsx';
import LetterPlatter from '../LetterPlatter/LetterPlatter.jsx';
import VictorySplash from '../VictorySplash/VictorySplash.jsx';
import DownloadMore from '../DownloadMore/DownloadMore.jsx';
import {scrabble} from '../../utils/wordUtils';
import {requestFirebase} from '../../utils/firebaseUtils';

import './Play.css';

class Play extends Component {
	constructor(){
		super();
		this.state = {
			won: false,
			wordsGuessed: 0,
			hint: {
				charge: 5,
				action: wordActions.GIVE_HINT
			}
		};
	}
	addTimeCount(){
		this.props.dispatch({
			type: gameActions.LOG_TIME,
		});
	}
	componentDidMount(){
		ga('send', 'pageview', location.pathname);
		if(this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters){
			this.props.dispatch({
				type: wordActions.SET_SCRABBLED_LETTERS,
				data: scrabble(this.props.wordReducer.words[0].word),
			});
		}
		setInterval(()=>{
			if (!this.state.won) {
				if (window.requestIdleCallback) {
					requestIdleCallback(this.addTimeCount.bind(this));
				} else {
					this.addTimeCount();
				}
			}
		},1000);
		requestFirebase(({messaging}) => {
			window.messaging = messaging;
			window.dispatchEvent && window.dispatchEvent(new Event("messaging available"));
		});
		if (window.dialogPolyfill) {
			dialogPolyfill.registerDialog(this.hintDialog.base);
		}
	}
	componentDidUpdate(prevProps){
		if(this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters){
			this.setState({
				won: false,
			});
			this.props.dispatch({
				type: wordActions.SET_SCRABBLED_LETTERS,
				data: scrabble(this.props.wordReducer.words[0].word),
			});
		} else if(this.props.wordReducer.words[0] && this.props.wordReducer.words[0].scrabbledLetters){
			let guessedWord = '';
			this.props.wordReducer.words[0].guessedLetters.forEach(data=>{
				guessedWord += data.letter;
			});
			if(!this.state.won && this.props.wordReducer.words[0].word.toLowerCase() === guessedWord.toLowerCase()){
				this.setState({
					wordsGuessed: this.state.wordsGuessed + 1,
					won: true,
				});
			}
		} else if (!this.props.wordReducer.lastWord) {
			route('/');
		}
	}
	render(){
		if (this.props.wordReducer.words[0]){
			return (
				<div className='screen-play'>
					<PreviewTiles
						images={this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images} mode='play'/>

					<div className="wordsection">
						<GuessedWord guess={this.props.wordReducer.words[0].guessedLetters}
							removeFromGuess={(data)=>{
								this.props.dispatch({
									type: wordActions.REMOVE_LETTER_TO_GUESSED_WORD,
									data,
								});
							}} />
						<LetterPlatter
							isGuessed={this.state.won}
							letters={this.props.wordReducer.words[0].scrabbledLetters}
							guess={this.props.wordReducer.words[0].guessedLetters}
							minorHintGiven={this.props.wordReducer.words[0].minorHintGiven}
							majorHintGiven={this.props.wordReducer.words[0].majorHintGiven}
							giveHint={() => {
								if (this.props.userReducer.coins >= 5) {
									this.setState({
										hint: {
											charge: 5,
											action: wordActions.GIVE_HINT
										}
									});
									this.hintDialog.showModal();
								}
							}}
							removeWrongLetters={() => {
								if (this.props.userReducer.coins >= 20) {
									this.setState({
										hint: {
											charge: 20,
											action: wordActions.REMOVE_WRONG_OPTIONS
										}
									});
									this.hintDialog.showModal();
								}
							}}
							onLetterSelect={(data)=>{
								this.props.dispatch({
									type: wordActions.ADD_LETTER_TO_GUESSED_WORD,
									data,
								});
							}}/>
						{this.state.won && <VictorySplash onContinue={()=>{
							const word = this.props.wordReducer.words[0];
							gameActions.saveTime(word._id, word.timeLapsed, word.images);
							this.props.dispatch({
								type: gameActions.WORD_GUESSED,
							});
							if (this.state.wordsGuessed > 1 && window.deferredPrompt) {
								this.a2hsDialog.showModal();
							}

							if (this.props.wordReducer.words.length < 25) {
								this.props.dispatch(wordActions.fetchNewWords(this.props.wordReducer.lastWord || 0));
							}
						}}/>}
					</div>
					<Dialog ref={hintDialog => {this.hintDialog = hintDialog;}}>
						<Dialog.Title>Hint</Dialog.Title>
						<Dialog.Content>
							You will be charged {this.state.hint.charge} coins for this hint.
						</Dialog.Content>
						<Dialog.Actions>
							<Button colored={true} onClick={()=>{
								this.props.dispatch({
									type: this.state.hint.action,
								});
								this.hintDialog.close();
							}}>Cool</Button>
							<Button onClick={() => {
								this.hintDialog.close();
							}}>No!</Button>
						</Dialog.Actions>
					</Dialog>
					<Dialog ref={a2hsDialog => {this.a2hsDialog = a2hsDialog;}}>
						<Dialog.Title>Like Us?</Dialog.Title>
						<Dialog.Content>
							Add our icon on homescreen to comeback easier. NO APP DOWNLOAD PROMISE!
						</Dialog.Content>
						<Dialog.Actions>
							<Button colored={true} onClick={()=>{
								this.a2hsDialog.close();
								window.deferredPrompt.prompt();
								window.deferredPrompt.userChoice.then(function(choiceResult) {
									if(choiceResult.outcome == 'dismissed') {
										ga('send', 'event', 'Engagement', 'A2HS', 'Dismissed');
									}
									else {
										ga('send', 'event', 'Engagement', 'A2HS', 'Accepted');
									}
									// We no longer need the prompt.  Clear it up.
									window.deferredPrompt = null;
								});
							}}>Yes!</Button>
							<Button onClick={() => {
								this.a2hsDialog.close();
								window.deferredPrompt = null;
								ga('send', 'event', 'Engagement', 'A2HS', 'Rejected');
							}}>Hate you</Button>
						</Dialog.Actions>
					</Dialog>
				</div>
			);
		} else {
			return (
				<DownloadMore fetchWords={()=>{
					this.props.dispatch(wordActions.fetchNewWords(this.props.wordReducer.lastWord || 0));
				}}/>
			);
		}
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer,
		userReducer: state.userReducer
	};
})(Play);