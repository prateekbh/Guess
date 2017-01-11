import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import { connect } from 'preact-redux';
import './header.css';
import Coins from './coins.svg';

export default class Header extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<header>
                <div className="settings">
                </div>
                <div className="logo">
                </div>
                <div className="coins">
                </div>
            </header>
		);
	}
}