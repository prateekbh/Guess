import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import {connect} from 'preact-redux';
import Logo from '../../images/Logo.svg';
import './Splash.css';
export default class Splash extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
		}
	}
	login() {
		const config = {
			apiKey: "AIzaSyARpD2ZY6JV0yWtWuVXsHk08u5cSEnNaH8",
			authDomain: "guess-f5b84.firebaseapp.com",
			messagingSenderId: "892039919403"
		};
		this.setState({
			isLoading: true,
		});
		firebase.initializeApp(config);
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(result=>{
			this.props.setUser({
				email: result.user.email,
				name: result.user.displayName,
			})
		}).catch(err=>{
			console.log('woops, cant get your profile!', err);
		})
	}
	render() {
		return (
			<div className='screen-splash'>
				<Logo className='logo'/>
				<div className="loading">
					{
						(this.state.isLoading || this.props.user.name) ? <Progress indeterminate={true}/> :
							<img className='signIn' src='/images/signin.png' onClick={this.login.bind(this)}/>
					}
				</div>
			</div>
		);
	}
}