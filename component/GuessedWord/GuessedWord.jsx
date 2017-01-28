import {h, Component} from 'preact';
import './GuessedWord.css';

export default class GuessedWord extends Component {
	render() {
        const letters = this.props.guess;
		return (
            <div className="guessed-word">
                {
                    letters && letters.map( data => {
                        return (
                            <div className="blank mdl-typography--title" onClick={()=>{this.props.removeFromGuess(data)}}>
                                    {data.letter}
                            </div>
                        );
                    })
                }
            </div>
		);
	}
}