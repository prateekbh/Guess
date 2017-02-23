import {h, Component} from 'preact';
import {Progress, Dialog, Button, Icon, Spinner, Snackbar} from 'preact-mdl';
import { connect } from 'preact-redux';
import {requestFirebaseMessaging} from '../../utils/firebaseUtils';
import {sendUserToken, NOTIFICATION_SUBSCRIBED} from '../../actions/user-actions';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import Coins from '../../images/coins.svg';
import Notification from '../../images/notification.svg';
import './Header.css';

class Header extends Component {
	constructor(){
		super();
		this.state = {
			firebaseLoaded: false,
			notificationsAvailable: false,
		};
	}
	componentDidMount() {
		document.querySelector('.dummy-splash').remove();
	}
	showSettings(){
		this.hintsDialog.showModal();
		this.setState({
			notificationsAvailable: !!window.swReg.pushManager
		});
	}
	requestPermission(){
		const that = this;
		requestFirebaseMessaging((messaging) => {
			messaging.requestPermission().then(()=>{
				messaging.getToken()
				.then(function(token) {
					if (token) {
						that.hintsDialog.close();
						sendUserToken({token})
							.then(data=>{
								that.dispatch({
									type: NOTIFICATION_SUBSCRIBED,
									data: {},
								})
								window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
									message: 'Awesome! We\'ll send you daily hints from now on!'
								});
							}).catch(function(err) {
								window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
									message: 'Some error occoured while registering you for Daily Hints'
								});
							});
					}
				}).catch(function(err) {
					window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
						message: 'Some error occoured while registering you for Daily Hints'
					});
				});
			}).catch(()=>{
				window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
					message: 'Sorry but we won\'t be able to give you daily hint now!'
				});
			});
	  });
	}
	render() {
		return (
			<header>
				<div className="settings">
					{ this.props.routeReducer.currentRoute === '/play' &&
						!this.props.userReducer.notificationsSubscribed &&
						<Button icon onClick={this.showSettings.bind(this)}>
							<Icon icon="notifications_active"/>
						</Button>
					}
				</div>
				<div className="logo">
					<LevelBadge level={this.props.userReducer.level} />
				</div>
				<div className="coins">
					<div>
						<Coins height='25'/>
						<div className="userCoins mdl-typography--title">{this.props.userReducer.coins}</div>
					</div>
				</div>
				<Dialog ref={hintsDialog => {this.hintsDialog = hintsDialog;}}>
					<Dialog.Title>Hint!</Dialog.Title>
					<Dialog.Content>
							{
								this.state.notificationsAvailable ?
									'Do you want to get daily hints via push notification?':
									'Sorry your browser does not support Push Notifications!'
							}
					</Dialog.Content>
					<Dialog.Actions>
						{
							this.state.notificationsAvailable ?
								<div>
									<Button onClick={() => {
										this.hintsDialog.close();
									}}>No</Button>
									<Button colored={true} onClick={this.requestPermission.bind(this)}>Yes</Button>

								</div> :
								<div>
									<Button onClick={() => {
										this.hintsDialog.close();
									}}>Cancel</Button>
								</div>
						}
					</Dialog.Actions>
				</Dialog>
			</header>
		);
	}
}

export default connect((state)=>{
	return {
		userReducer: state.userReducer,
		routeReducer: state.routeReducer,
	};
})(Header);