import {h, Component} from 'preact';
import Splash from '../Splash/Splash.jsx';
import Header from '../Header/Header.jsx';
import {connect} from 'preact-redux';
import * as actions from '../../actions/word-actions';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			showSplash: true
		};
	}
	componentDidUpdate(prevProps, state){
		if(prevProps.wordReducer.wordsLoaded === false
			&& this.props.wordReducer.wordsLoaded === true
			&& this.props.wordReducer.words.length <25){
				// this.props.dispatch({
				// 	type: actions.FETCH_WORDS
				// });
				this.setState({
					showSplash: false
				});
			}
	}
	render(){
		return (
			<div>
				{
					(!this.props.wordReducer.wordsLoaded || this.props.wordReducer.words.length == 0)
						&& this.state.showSplash
						&& <Splash/>
				}
				<Header userCoins={this.props.userReducer.coins}/>
			</div>
		);
	}
}

export default connect((state)=>{
	return {
		wordReducer: state.wordReducer,
		userReducer: state.userReducer,
	};
})(Home);