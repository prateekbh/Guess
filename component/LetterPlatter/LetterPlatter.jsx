import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button, Icon} from 'preact-mdl';
import {ADD_LETTER_TO_GUESSED_WORD} from '../../actions/word-actions';

import './LetterPlatter.css';

class LetterPlatter extends Component {
    sendLetter(index){
        this.props.dispatch({
            type: ADD_LETTER_TO_GUESSED_WORD,
            data: {
                index,
                letter: this.props.letters[index],
            }
        })
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

export default connect((state)=>{
	return {};
})(LetterPlatter);