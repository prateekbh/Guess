import {h, Component} from 'preact';
import './Blocker.css';

export default class Blocker extends Component {
	componentDidMount() {
		this.setState({
			showBlocker: window.innerWidth > window.innerHeight
		});
		window.addEventListener('resize' ,() =>{
			this.setState({
				showBlocker: window.innerWidth > window.innerHeight
			});
		});
	}
	render() {
		return (
			<div className={this.state.showBlocker ? 'blocker': 'blocker unblocked'}>
				<section className="logo">
					<img src='/images/logo.svg' alt='logo' className="logo"/>
				</section>
				<section className="text">
					<div className="heading mdl-typography--display-3">Guess</div>
					<div className="description mdl-typography--title">Sorry! Guess is currently available on mobile browsers. We're working hard to soon bring it to you desktop browsers.</div>
				</section>

			</div>
		);
	}
}
