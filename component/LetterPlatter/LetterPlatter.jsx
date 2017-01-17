import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button, Icon} from 'preact-mdl';

import './LetterPlatter.css';

export default class LetterPlatter extends Component {
    sendLetter(index){
        console.log(this.props.letters[index]);
    }
	render() {
		return (
			<div className='platter'>
                <div className="letters">
                    {
                        this.props.letters && this.props.letters.map((letter, index) => {
                            return(
                                <div className="letter mdl-typography--title">
                                    <Button accent={true} raised={true}
                                        onClick = {() => {this.sendLetter(index)}}>{letter}</Button>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="hints">
                    <div className="letter mdl-typography--title">
                        <Button colored={true} raised={true} icon>
                            <Icon icon="favorite" />
                        </Button>
                    </div>
                    <div className="letter mdl-typography--title">
                        <Button colored={true} raised={true} icon>
                            <Icon icon="delete" />
                        </Button>
                    </div>
                </div>
			</div>
		);
	}
}