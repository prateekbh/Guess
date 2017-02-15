import {h, Component} from 'preact';
import {Progress, Dialog, Button, Icon} from 'preact-mdl';
import { connect } from 'preact-redux';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import Coins from '../../images/coins.svg';
import Notification from '../../images/notification.svg';
import './Header.css';
class Header extends Component {
	constructor(){
		super();
		this.state = {}
	}
	showSettings(){
		this.settingsDialog.base.showModal();
	}
	render() {
		return (
			<header>
					<div className="settings">
						<Button icon onClick={()=>{this.hintsDialog.showModal()}}>
                            <Icon icon="notifications_active"/>
                        </Button>
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
								Do you want to get daily hints via push notification?
						</Dialog.Content>
						<Dialog.Actions>
							<Button colored={true} onClick={() => {
								this.hintsDialog.close();
							}}>Yes</Button>
							<Button onClick={() => {
								this.hintsDialog.close();
							}}>No</Button>
						</Dialog.Actions>
					</Dialog>
			</header>
		);
	}
}

export default connect((state)=>{
	return {
		userReducer: state.userReducer,
	};
})(Header);