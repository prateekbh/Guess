import {h, Component} from 'preact';
import {Spinner} from 'preact-mdl';
import './Loading.css';

export default class Loading extends Component {
	render() {
		return (
            <div className="screen-loading">
				<Spinner active={true}/>
			</div>
		);
	}
}