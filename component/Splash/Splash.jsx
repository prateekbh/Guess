import {h, Component} from 'preact';
import {Progress, Button, Dialog, TextField} from 'preact-mdl';
import {connect} from 'preact-redux';
import Logo from '../../images/Logo.svg';
import Toast from '../Toast/Toast.jsx';
import './Splash.css';

export default class Splash extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
		}
	}
	componentDidMount(){
		window.addEventListener('offline', () => {
			this.toast.addToast('You are offline!');
		});
	}
	login() {
		if (navigator.onLine) {
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
					authToken: result.credential.idToken,
				});
			}).catch(err=>{
				console.log('woops, cant get your profile!', err);
			});
		} else {
			this.offlineDialog.base.showModal();
		}
	}
	render() {
		return (
			<div className='screen-splash'>
				<Logo className='logo'/>
				<div className="loading">
					{
						(this.state.isLoading || this.props.user.name) ? <Progress indeterminate={true}/> :
							<div>
								<div className='btn-google'>
									<Button raised={true} onClick={this.login.bind(this)}>
										<div>Sign in with Google</div>
									</Button>
								</div>
								<div className='btn-guest'>
									<Button raised={true} onClick={()=>{
										this.nameDialog.base.showModal();
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
							}}/>
					</Dialog.Content>
					<Dialog.Actions>
						<Button colored={true} onClick={()=>{
							const name = this.state.guestName;
							if (name && name.length>1){
								navigator.onLine ? this.props.setUser({
									authToken: null,
									name,
								}) : this.offlineDialog.base.showModal();
							}
						}}>Done</Button>
						<Button onClick={()=>{
							this.nameDialog.base.close();
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