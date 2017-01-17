import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button} from 'preact-mdl';
import {route} from 'preact-router';
import Splash from '../Splash/Splash.jsx';
import Header from '../Header/Header.jsx';
import * as actions from '../../actions/word-actions';
import PreviewTiles from '../PreviewTiles/PreviewTiles.jsx';
import GuessedWord from '../GuessedWord/GuessedWord.jsx';
import LetterPlatter from '../LetterPlatter/LetterPlatter.jsx';
import {scrabble} from '../../utils/wordScrabbler';
import {ADD_LETTER_TO_GUESSED_WORD} from '../../actions/word-actions';

import './Play.css';

class Play extends Component {
	componentDidMount(){
		if(this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters){
			this.props.dispatch({
				type: actions.SET_SCRABBLED_LETTERS,
				data: scrabble(this.props.wordReducer.words[0].word),
			});
		}
	}
	render(){
		return (
			<div className='screen-play'>
				<PreviewTiles
					images={this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images} mode='play'/>
				<div className="wordsection">
					<GuessedWord guess={this.props.wordReducer.words[0].guessedLetters} />
					<LetterPlatter
						letters={this.props.wordReducer.words[0].scrabbledLetters}
						onLetterSelect={(data)=>{
							this.props.dispatch({
								type: ADD_LETTER_TO_GUESSED_WORD,
								data,
							});
						}}/>
				</div>

			</div>
		);
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer
	};
})(Play);