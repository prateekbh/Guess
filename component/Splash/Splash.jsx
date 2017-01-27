import {h, Component} from 'preact';
import {Progress, Button, Dialog, TextField} from 'preact-mdl';
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
			});
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
								this.props.setUser({
									email: null,
									name,
								});
							}
						}}>Done</Button>
						<Button onClick={()=>{
							this.nameDialog.base.close();
						}}>Cancel</Button>
					</Dialog.Actions>
				</Dialog>
			</div>
		);
	}
}