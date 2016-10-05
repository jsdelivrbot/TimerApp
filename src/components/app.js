import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DoneItem from './done_item';

let start, end;
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.item,
			count: 0,
			timeUp: "00:00:00"
		}
		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(it, newTitle, newRate) {
		let item = this.props.item;
		let i = item.indexOf(it);
		item[i].title = newTitle;
		item[i].rate = newRate;
		localStorage.setItem('item', JSON.stringify(item));
		this.setState({ item: item});
   }
	ticking () {
		let sec = this.state.count;
		let h = Math.floor(sec/3600);
		let m = Math.floor(sec%3600/60);
		let s = Math.floor(sec%3600%60);
		let timeUp = ((h > 0 ? h:"00" + ":" + (m < 10 ? "0" : "0") : "") + m + ":" + (s < 10 ? "0" : "") + s);
		this.setState({count: this.state.count + 1, timeUp: timeUp});
	}
	startTimer () {
		clearInterval(this.timer);
		this.timer = setInterval(this.ticking.bind(this), 1000);
	}
	stopTimer () {
		clearInterval(this.timer);
	}
   addTask() {
		let item = this.props.item;
		let i = {
			title: ReactDOM.findDOMNode(this.refs.taskName).value,
			rate: ReactDOM.findDOMNode(this.refs.taskRate).value,
			count: this.state.count
		};
		item.push(i);
		ReactDOM.findDOMNode(this.refs.taskName).value = "";
		ReactDOM.findDOMNode(this.refs.taskRate).value = "";
		this.setState({ count: 0, timeUp: "00:00:00"});
		localStorage.setItem('item', JSON.stringify(item));
		this.setState({ item:item});
	}
	doneTasks(task) {
		let item = this.props.item;
		item.splice(item.indexOf(task), 1);
		localStorage.setItem('item', JSON.stringify(item));
		this.setState({ item: item});
	}
	onFormSubmit(event) {
   	event.preventDefault();
  	}
	onClickBtn() {
		const btn = document.getElementById('start-stop-btn');
		if (btn.getAttribute("data-text-swap") == btn.innerHTML) {
			btn.innerHTML = btn.getAttribute("data-text-original");
			this.stopTimer();
			this.addTask();
		} else {
	      btn.setAttribute("data-text-original", btn.innerHTML);
	      btn.innerHTML = btn.getAttribute("data-text-swap");
			this.startTimer();
    	}
	}
   render() {
		return (
      <div>
			<h3>How many tasks you have: {this.props.item.length}</h3>
	  	<form className="form-inline row" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					className="task-input col-sm-5"
					placeholder="Task name here..."
					ref="taskName"
					id="task-name-input"/>
				<input
					type="number"
					className="task-input col-sm-3"
					placeholder="RUB"
					ref="taskRate"
					aria-describedby="basic-addon"
					id="task-price-input"/>
				<div className="col-sm-2">{this.state.timeUp}</div>
				<button
					id="start-stop-btn"
					className="btn btn-secondary col-sm-2"
					data-text-swap="Stop"
					onClick={this.onClickBtn.bind(this)}>Start</button>
 			</form>
			<ul className="list-group">
				{this.state.item.map(function(i) {
					return <DoneItem
								title={i.title}
								rate={i.rate}
								count={i.count}
								i= {i}
								onInputChange = {this.onInputChange}
								doneTasks={this.doneTasks.bind(this)} />
				}.bind(this))}
			</ul>
		</div>
		);
   }
}
