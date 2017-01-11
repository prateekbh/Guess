import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import { connect } from 'preact-redux';
import './header.css';
import Coins from '../../images/coins.svg';

export default class Header extends Component {
	constructor(){
		super();
	}
	render() {
		console.log(this.props);
		return (
			<header>
					<div className="settings">
					</div>
					<div className="logo">
					</div>
					<div className="coins">
						<div>
							<Coins height='25'/>
							<div className="userCoins">{this.props.userCoins}</div>
						</div>
					</div>
			</header>
		);
	}
}