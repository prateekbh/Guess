import {h, Component} from 'preact';
import {Button, Dialog, Progress} from 'preact-mdl';
import './DownloadMore.css';

export default class DownloadMore extends Component {
	downloadGames(){
		if (navigator.onLine) {
			this.setState({
				loading: true,
			}, () => {
				this.props.fetchWords();
			})
		} else {
			this.setState({
				dialogMessage: 'You dont have an active Internet connection!!!'
			}, () => {
				this.dialog.showModal();
			});
		}
	}
	render() {
		return (
            <div className="screen-download">
			<div className="center face">
				<div>
					<img src='/images/surprised.svg' height="120" />
				</div>
				<div className="text mdl-typography--title">
					Seems like you ran outta games! Here lets download a few more
				</div>
			</div>
			<div className="center actions">
				{
					this.state.loading? <Progress indeterminate={true}/>:
					<Button accent={true} raised={true} onClick={this.downloadGames.bind(this)}>
						Download
					</Button>
				}
			</div>
			<Dialog ref={dialog => {this.dialog = dialog;}}>
				<Dialog.Title>Woops</Dialog.Title>
				<Dialog.Content>
					{this.state.dialogMessage}
				</Dialog.Content>
				<Dialog.Actions>
					<Button onClick={() => {
						this.dialog.close();
					}}>No!</Button>
				</Dialog.Actions>
			</Dialog>
            </div>
		);
	}
}