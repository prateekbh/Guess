import {h, Component} from 'preact';
import Splash from '../Splash/Splash.jsx';
import Header from '../Header/Header.jsx';
import {connect} from 'preact-redux';
import * as actions from '../../actions/word-actions';

class Home extends Component {
	componentDidUpdate(prevProps, state){
		if(prevProps.wordReducer.wordsLoaded === false
			&& this.props.wordReducer.wordsLoaded === true
			&& this.props.wordReducer.words.length <25){
				this.props.dispatch({
					type: actions.FETCH_WORDS
				});
			}
	}
	render(){
		return (
			<div>
				{
					(!this.props.wordReducer.wordsLoaded || this.props.wordReducer.words.length < 25)
						&& <Splash/>
				}
				<Header/>
			</div>
		);
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer,
	};
})(Home);