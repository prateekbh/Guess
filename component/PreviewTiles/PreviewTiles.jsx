import {h, Component} from 'preact';
import {Progress} from 'preact-mdl';
import './PreviewTiles.css';

export default class Header extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<div className={this.props.mode+"-tiles"}>
				{
					this.props.images.map(e=> {
						return (
							<div className="tile" style={'background-image:url(' + e + ')'}>
							</div>
						)
					})
				}
				{
					this.props.mode == 'preview' &&
					<div className="level">
						<div className="mdl-typography--title">
							{this.props.level}
						</div>
					</div>
				}
			</div>
		);
	}
}