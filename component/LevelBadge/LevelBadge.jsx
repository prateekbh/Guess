import {h, Component} from 'preact';
import './LevelBadge.css';

export default class LevelBadge extends Component {
	render() {
		return (
            <div className="level">
                <div className="mdl-typography--title">
                    {this.props.level}
                </div>
            </div>
		);
	}
}