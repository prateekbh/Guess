import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import LevelBadge from '../LevelBadge/LevelBadge.jsx';
import './PreviewTiles.css';


export default class Header extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<div className={this.props.mode+"-tiles"}>
				{
					this.props.images && this.props.images.map(e=> {
						return (
							<div className="tile">
								<img src={e} className="pic"/>
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