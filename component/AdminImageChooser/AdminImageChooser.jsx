import {h, Component} from 'preact';
import './AdminImageChooser.css';
export default class AdminImageChooser extends Component {
  constructor(){
		super();
		this.state = {
			isShown: true,
		}
	}
	render(){
		if(this.state.isShown) {
			return (
				<div className={this.props.choosen ? 'control-imagechooser choosen': 'control-imagechooser'} {...this.props}>
					{
						this.props.choosen &&
						<div className="tick">
							<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
									<path d="M0 0h24v24H0z" fill="none"/>
									<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
							</svg>
						</div>
					}
					<img src={this.props.src} ref={(e)=>{this.pic = e;}} className="img-thumb" onLoad={()=>{
						if (this.pic.height < 110 || this.pic.height > 118){
							this.setState({
								isShown: false,
							});
						} else {
							console.log('eliminating cuz f' + this.pic.height);
						}
					}}/>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
}