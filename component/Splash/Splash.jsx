import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import {connect} from 'preact-redux';
import Logo from '../../images/Logo.svg';
import './Splash.css';
export default class Splash extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<div className='screen-splash'>
				<Logo className='logo'/>
				<div className="loading">
					<Progress indeterminate={true}/>
				</div>
			</div>
		);
	}
}