import {h, Component} from 'preact';
import './AdminImageChooser.css';
export default class AdminImageChooser extends Component {
  constructor(){
		super();
	}
	render(){
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
				<div className='img-thumb' style={'background-image:url(' + this.props.src + '})'} />
			</div>
		);
	}
}