import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button} from 'preact-mdl';
import {route} from 'preact-router';
import Splash from '../Splash/Splash.jsx';
import Header from '../Header/Header.jsx';
import * as actions from '../../actions/word-actions';
import PreviewTiles from '../PreviewTiles/PreviewTiles.jsx';
import LetterPlatter from '../LetterPlatter/LetterPlatter.jsx';
import './Play.css';

class Play extends Component {
	render(){
		return (
			<div className='screen-play'>
				<PreviewTiles
					images={this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images} mode='play'/>
				<LetterPlatter word={this.props.wordReducer.words[0].word}/>
			</div>
		);
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer
	};
})(Play);