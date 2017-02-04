import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button} from 'preact-mdl';
import {route} from 'preact-router';
import Splash from '../Splash/Splash.jsx';
import * as actions from '../../actions/word-actions';
import * as userActions from '../../actions/user-actions';
import PreviewTiles from '../PreviewTiles/PreviewTiles.jsx';
import './Home.css';

class Home extends Component {
	constructor() {
		super();
	}
	componentDidUpdate(prevProps, state){
		if(prevProps.wordReducer.wordsLoaded === false
			&& this.props.wordReducer.wordsLoaded === true
			&& this.props.wordReducer.words.length < 5){
				this.props.dispatch(actions.fetchNewWords(this.props.wordReducer.lastWord || 0));
			}
	}
	startPlay() {
		route('/play');
	}
	render(){
		return (
				<div className='screen-home'>
				{
					(!this.props.wordReducer.wordsLoaded || this.props.wordReducer.words.length == 0 || !this.props.userReducer.name) &&
						<Splash
							showHome={this.showHome}
							user={this.props.userReducer}
							setUser={data=>{
								if (data.authToken) {
									this.props.dispatch(userActions.loginUser({ authToken: data.authToken }));
								} else {
									this.props.dispatch(userActions.loginUser({ name: data.name }));
								}
							}}/>
				}
				<div>
					<PreviewTiles
					images={this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images}
					level={this.props.userReducer.level} mode='preview'/>
				</div>
				<div className='container-play'>
					<Button accent={true} raised={true} onCLick={this.startPlay.bind(this)}>Play</Button>
				</div>
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