import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Button, Icon} from 'preact-mdl';

import './LetterPlatter.css';

export default class LetterPlatter extends Component {
    sendLetter(index){
        this.props.onLetterSelect({
            index,
            letter: this.props.letters[index],
        });
    }
	render() {
		return (
            <div className={this.props.isGuessed ? 'platter guessed': 'platter'}>
                <div className="letters">
                    {
                        this.props.letters && this.props.letters.map((letter, index) => {
                            let showLetter = true;
                            this.props.guess.forEach(data => {
                                if(data.index === index && letter === data.letter){
                                    showLetter = false;
                                }
                            });
                            return(
                                <div className="letter mdl-typography--title">
                                    <Button accent={true} raised={true} disabled={!showLetter}
                                        onClick = {() => {
                                            this.sendLetter(index);
                                        }}>{showLetter?letter:''}</Button>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="hints">
                    <div className="letter mdl-typography--title">
                        <Button colored={true} raised={true} icon onClick={this.props.giveHint}>
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