import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import { connect } from 'preact-redux';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import Coins from '../../images/coins.svg';
import './header.css';
class Header extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<header>
					<div className="settings">
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
			</header>
		);
	}
}

export default connect((state)=>{
	return {
		userReducer: state.userReducer,
	};
})(Header);