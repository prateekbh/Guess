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
import {scrabble} from '../../utils/wordScrabbler';

import './Play.css';

class Play extends Component {
	constructor(){
		super();
		this.state = {
			won: false
		};
	}
	componentDidMount(){
		if(this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters){
			this.props.dispatch({
				type: wordActions.SET_SCRABBLED_LETTERS,
				data: scrabble(this.props.wordReducer.words[0].word),
			});
		}
	}
	componentDidUpdate(prevProps){
		if(this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters){
			this.props.dispatch({
				type: wordActions.SET_SCRABBLED_LETTERS,
				data: scrabble(this.props.wordReducer.words[0].word),
			});
			this.setState({
				won: false,
			});
		} else if(this.props.wordReducer.words[0] && this.props.wordReducer.words[0].scrabbledLetters){
			let guessedWord = '';
			this.props.wordReducer.words[0].guessedLetters.forEach(data=>{
				guessedWord += data.letter;
			});
			if(!this.state.won && this.props.wordReducer.words[0].word.toLowerCase() === guessedWord.toLowerCase()){
				this.setState({
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
							giveHint={() => {
								this.hintDialog.showModal();
							}}
							onLetterSelect={(data)=>{
								this.props.dispatch({
									type: wordActions.ADD_LETTER_TO_GUESSED_WORD,
									data,
								});
							}}/>
						{this.state.won && <VictorySplash onContinue={()=>{
							this.props.dispatch({
								type: gameActions.WORD_GUESSED,
							});
						}}/>}
					</div>
					<Dialog ref={hintDialog => {this.hintDialog = hintDialog;}}>
						<Dialog.Title>Hint</Dialog.Title>
						<Dialog.Content>
							You will be charged 5 coins for the hint.
						</Dialog.Content>
						<Dialog.Actions>
							<Button colored={true} onClick={()=>{
								this.props.dispatch({
									type: wordActions.GIVE_HINT,
								});
								this.hintDialog.base.close();
							}}>Cool</Button>
							<Button onClick={() => {
								this.hintDialog.close();
							}}>No!</Button>
						</Dialog.Actions>
					</Dialog>
				</div>
			);
		} else {
			return (
				<div></div>
			);
		}
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer
	};
})(Play);