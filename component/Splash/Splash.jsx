import {h, Component} from 'preact';
import {Progress, Button, Dialog, TextField} from 'preact-mdl';
import {connect} from 'preact-redux';
import Toast from '../Toast/Toast.jsx';
import './Splash.css';

export default class Splash extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			stretchWindow: false,
			winHeight: 0,
			enableSocialLogin: false,
		}
	}
	componentDidMount(){
		window.addEventListener('offline', () => {
			this.toast.addToast('You are offline!');
		});
		require.ensure(['firebase/app.js','firebase/auth.js', 'firebase/messaging.js'], (require) => {
			this.firebase = require('firebase/app.js');
			require('firebase/auth.js');

			this.setState({
				enableSocialLogin: true,
			});
		});
	}
	login() {
		this.setState({
			isLoading: true,
		});
		if (navigator.onLine) {
			const config = {
				apiKey: "AIzaSyARpD2ZY6JV0yWtWuVXsHk08u5cSEnNaH8",
				authDomain: "guess-f5b84.firebaseapp.com",
				messagingSenderId: "892039919403"
			};
			const firebase = this.firebase;
			firebase.initializeApp(config);
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(result=>{
				this.props.setUser({
					authToken: result.credential.idToken,
				});
			}).catch(err=>{
				console.log('woops, cant get your profile!', err);
			});
		} else {
			this.offlineDialog.base.showModal();
		}
	}
	sendGuestName() {
		const name = this.state.guestName;
		this.nameDialog.base.close();
		if (name && name.length>1){
			navigator.onLine ? this.props.setUser({
				authToken: null,
				name,
			}) : this.offlineDialog.base.showModal();
		}
	}
	render() {
		return (
			<div className='screen-splash' style={this.state.stretchWindow ? 'height:' + this.state.winHeight + 'px' : ''}>
				<div className="logo-container">
					<img src='/images/logo.svg' className='logo' alt='guess logo'/>
				</div>
				<div className="loading">
					{
						(this.state.isLoading || this.props.user.name) ? <Progress indeterminate={true}/> :
							<div>
								<div className='btn-google'>
									<Button raised={true} onClick={this.login.bind(this)} disabled={!this.state.enableSocialLogin}>
										<div>Sign in with Google</div>
									</Button>
								</div>
								<div className='btn-guest'>
									<Button raised={true} onClick={()=>{
										this.setState({
											winHeight: window.innerHeight,
											stretchWindow: true,
										},() => {
											this.nameDialog.base.showModal();
										});
									}}>
										Continue as guest
									</Button>
								</div>
							</div>
					}
				</div>
				<Dialog ref={nameDialog => {this.nameDialog = nameDialog;}}>
					<Dialog.Title>Guest name</Dialog.Title>
					<Dialog.Content>
						Please let us know your name
						<TextField maxlength="20"
							ref={nameField => this.nameField = nameField}
							onChange={e => {
								this.setState({
									guestName: e.target.value,
								})
							}}
							value={this.state.guestName}
							onKeyUp={e=>{
								if (e.key === 'Enter') {
									document.activeElement && document.activeElement.blur();
									this.sendGuestName();
								}
							}}/>
					</Dialog.Content>
					<Dialog.Actions>
						<Button colored={true} onClick={this.sendGuestName.bind(this)}>Done</Button>
						<Button onClick={()=>{
							this.setState({
								winHeight: window.innerHeight,
								stretchWindow: true,
							},() => {
								this.nameDialog.base.close();
							});
						}}>Cancel</Button>
					</Dialog.Actions>
				</Dialog>
				<Dialog ref={offlineDialog => {this.offlineDialog = offlineDialog;}}>
					<Dialog.Title>Offline!</Dialog.Title>
					<Dialog.Content>
						Woops, you need to be online for signing in.
					</Dialog.Content>
					<Dialog.Actions>
						<Button colored={true} onClick={()=>{
							this.offlineDialog.base.close();
						}}>Okay</Button>
					</Dialog.Actions>
				</Dialog>
				<Toast ref={toast => this.toast = toast}/>
			</div>
		);
	}
}