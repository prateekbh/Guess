import {h, Component} from 'preact';
import './Toast.css';

export default class Header extends Component {
	constructor(){
		super();
        this.state = {
            toasts: [],
        }
	}
    addToast(text){
        this.setState({
            toasts: [...this.state.toasts, text],
        });
        setTimeout(()=>{
           this.setState({
                toasts: [...this.state.toasts.slice(1)],
            });
        },3600);
    }
	render() {
		return (
			<div className='toast-container'>
                {
                    this.state.toasts.map(toast=>{
                        return <div className="toast">{toast}</div>
                    })
                }
            </div>
		);
	}
}