import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './LetterPlatter.css';

const allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const totalPlatterLength = 12;
export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            letters : []
        };
    }
    componentDidMount(){
        const word = this.props.word.toUpperCase();
        const wordLength = word.length;
        const wordLetters = word.split('');
        let otherLetters = [];
        for(let remainingCount = (totalPlatterLength - wordLength); remainingCount > 0; remainingCount --){
            const indexToPop = Math.floor(Math.random() * allLetters.length);
            otherLetters.push(allLetters.slice(indexToPop, indexToPop + 1)[0]);
        }
        otherLetters = otherLetters.concat(wordLetters);
        const platterLetters = [];
        for(let index = 0; index < totalPlatterLength; index++){
            const indexToPop = Math.floor(Math.random() * otherLetters.length);
            platterLetters.push(otherLetters.splice(indexToPop, 1)[0]);
        }
        this.setState({
            letters: platterLetters,
        });
    }
	render() {
		return (
			<div className='platter'>
                <div className="letters">
                    {
                        this.state.letters.map(letter => {
                            return(
                                <div className="letter mdl-typography--title">
                                    <div className="tap">{letter}</div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="hints">
                    <div className="letter mdl-typography--title">
                        <div className="tap">A</div>
                    </div>
                    <div className="letter mdl-typography--title">
                        <div className="tap">B</div>
                    </div>
                </div>
			</div>
		);
	}
}