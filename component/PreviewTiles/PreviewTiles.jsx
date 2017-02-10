import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import './PreviewTiles.css';

export default class Header extends Component {
	constructor(){
		super();
		this.state = {
			largenedImageIndex: -1,
		}
	}
	enlargeImage(index) {
		if (this.state.largenedImageIndex === index) {
			this.setState({
				largenedImageIndex: -1,
			});
		} else {
			this.setState({
				largenedImageIndex: index,
				ahead: true,
			});
		}
	}
	render() {
		return (
			<div className={this.props.mode+"-tiles"}>
				{
					this.props.images && this.props.images.map((e, index)=> {
						const imageStyle = "background-image:url("+ e +");";
						return (
							<div className={(index === this.state.largenedImageIndex) ? "large tile": "tile"}>
								<div className="pic"
									style={imageStyle}
									onClick={this.enlargeImage.bind(this, index)}/>
							</div>
						)
					})
				}
				{
					this.props.mode == 'preview' && <LevelBadge level={this.props.level} />
				}
			</div>
		);
	}
}