import {h, Component} from 'preact';
import {TextField, Button, Progress} from 'preact-mdl';
import AdminImageChooser from '../AdminImageChooser/AdminImageChooser.jsx';

import './AdminBase.css';

export default class AdminBase extends Component {
  constructor(){
		super();
		this.state={
			fetchingResults: false,
			fetchedResults: false,
			searchTerm: '',
			chosenImages:[],
		};
	}
	fetchResults(){
		fetch('/adminapi/search?q='+this.state.searchTerm)
			.then(d=>d.json())
			.then(data=>{
				this.setState({
					fetchingResults: false,
					resultWord: data.word,
					fetchedResults: data.images,
				});
			}).catch(e=>{})
		this.setState({
			fetchingResults: true,
			searchTerm: '',
			chosenImages:[],
		});
	}
	chooseImage(e){
		if(this.state.chosenImages.length < 4){
			let newImages = this.state.chosenImages;
			newImages.push(e);
			this.setState({
				chosenImages: newImages
			});
		} else if (this.state.chosenImages.indexOf(e) !== -1){
			let newImages = this.state.chosenImages;
			this.setState({
				chosenImages: newImages.splice(this.state.chosenImages.indexOf(e),1)
			});
		}
	}
	sendWord(){
		const payload={
			word:this.state.resultWord,
			images:this.state.chosenImages
		}
		this.setState({
			fetchingResults: false,
			fetchedResults: false,
			searchTerm: '',
			chosenImages:[],
		})
		fetch('/adminapi/saveword',{
			method: 'POST',
			body: JSON.stringify(payload),
			headers: new Headers({
				'content-type': 'application/json'
			})
		}).then( (res) => {
			if(res.ok){
				alert('saved')
			} else {
				alert('errored')
			}
		}).catch(e=>{});
	}
	render(){
		return (
			<div className='page page-adminbase'>
				<div className='container-searchbox'>
					<TextField label='Word' value={this.state.searchTerm} autofocus='true' onChange={(e)=>{
						this.setState({
							searchTerm: e.target.value
						});
					}} />
					<Button with-ripple={true} onClick={this.fetchResults.bind(this)}>Search</Button>
				</div>
				<div className='progress'>
					{this.state.fetchingResults && <Progress indeterminate={true}/>}
				</div>
				<div className='grid'>
					{this.state.fetchedResults && this.state.fetchedResults.map(e=>{
						return (<AdminImageChooser choosen={this.state.chosenImages.indexOf(e)!==-1} src={e} onClick={this.chooseImage.bind(this,e)}></AdminImageChooser>);
					})}
				</div>
				{
					this.state.chosenImages.length === 4 &&
					<div className="sendButton">
						<Button fab={true} accent={true} onClick={this.sendWord.bind(this)}>
							<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
									<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</Button>
					</div>
				}
			</div>
		);
	}
}