import {h, Component} from 'preact';
import {Progress, Dialog, Button, Icon, Spinner} from 'preact-mdl';
import { connect } from 'preact-redux';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import Coins from '../../images/coins.svg';
import Notification from '../../images/notification.svg';
import './Header.css';
import {requestFirebaseMessaging} from '../../utils/firebaseUtils';
class Header extends Component {
	constructor(){
		super();
		this.state = {
			firebaseLoaded: false,
			notificationsAvailable: false,
		};
	}
	showSettings(){
		this.hintsDialog.showModal();
		this.setState({
			notificationsAvailable: !!window.swReg.pushManager
		});
		requestFirebaseMessaging((messaging) => {
			this.setState({
				firebaseLoaded: true,
			});
			messaging.requestPermission();
		});
	}
	render() {
		return (
			<header>
					<div className="settings">
						{ this.props.routeReducer.currentRoute === '/play' &&
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
									this.state.firebaseLoaded && this.state.notificationsAvailable ?
										'Do you want to get daily hints via push notification?':
										this.state.notificationsAvailable ?
											<Spinner active={true}/>:
											'Sorry your browser does not support Push Notifications!'
								}
						</Dialog.Content>
						<Dialog.Actions>
							{
								this.state.firebaseLoaded && this.state.notificationsAvailable ?
									<div>
										<Button onClick={() => {
											this.hintsDialog.close();
										}}>No</Button>
										<Button colored={true} onClick={() => {
											this.hintsDialog.close();
										}}>Yes</Button>

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