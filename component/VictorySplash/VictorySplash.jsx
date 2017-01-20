import {h, Component} from 'preact';
import {Button, Icon} from 'preact-mdl';
import './VictorySplash.css';

export default class VictorySplash extends Component {
	render() {
		return (
            <div className="splash-victory">
                <div className="ribbonholder">
                    <div className="ribbon">
                        <div className="stars">
                            <Icon icon="stars" />
                        </div>
                        <div className="text mdl-typography--title">YOU WON</div>
                        <div className="stars">
                            <Icon icon="stars" />
                        </div>
                    </div>
                </div>
                <div className="continueholder">
                    <Button accent={true} raised={true} onClick={this.props.onContinue}>Continue</Button>
                </div>
            </div>
		);
	}
}