import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button, Icon, Fab} from 'preact-mdl';
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
	componentDidMount(){
		ga('send', 'pageview', location.pathname);
	}
	componentDidUpdate(prevProps, state){
		if(!prevProps.userReducer.name && this.props.userReducer.name && this.props.wordReducer.words.length < 25){
			this.props.dispatch(actions.fetchNewWords(this.props.wordReducer.lastWord || 0));
		}
		if(!prevProps.wordReducer.wordsLoaded && this.props.wordReducer.wordsLoaded
			&& this.props.wordReducer.giveNotificateionHint) {
			this.props.dispatch({
				type: actions.NOTIFICATION_HINT,
			});
		}
	}
	startPlay() {
		route('/play');
	}
	render(){
		if (!this.props.wordReducer.wordsLoaded) {
			return null;
		}
		return (
				<div className='screen-home'>
				{
					(this.props.wordReducer.words.length == 0 || !this.props.userReducer.name) &&
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
				{navigator.share && <div className='container-share'>
					<Button fab={true} colored={true} raised={true} onCLick={() => {
						ga('send', 'event', 'Engagement', 'Share', 'Share Initiated');
						navigator.share({
							title: document.title,
							text: "Let play this awesome game- Guess",
							url: "https://playguess.herokuapp.com/"
						})
						.then(() => {
							ga('send', 'event', 'Engagement', 'Share', 'Share Done');
						})
						.catch(error => {
							ga('send', 'event', 'Engagement', 'Share', 'Share Errored');
						});
					}}>
						<Icon icon="share"/>
					</Button>
				</div>}
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