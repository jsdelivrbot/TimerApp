import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DoneItem extends Component {
	doneTasks() {
		this.props.doneTasks(this.props.i);
	}
	update() {
		let newTitle = ReactDOM.findDOMNode(this.refs.newTitle).value;
		let newRate = ReactDOM.findDOMNode(this.refs.newRate).value;
      this.props.onInputChange(this.props.i, newTitle, newRate);
	}
	render() {
		const {title, rate, count} = this.props;
		let hours = count/3600;
		let h = Math.floor(count/3600);
		let m = Math.floor(count%3600/60);
		let s = Math.floor(count%3600%60);
		let timeSpended = ((h > 0 ? h:"00" + ":" + (m < 10 ? "0" : "0") : "") + m + ":" + (s < 10 ? "0" : "") + s);
		const price = Math.round(hours*rate * 10) / 10;

   	return (
			<li className="done-task">
	      	<input
						className="task-input task-name"
						ref="newTitle"
						type="text"
						value={title}
						onChange={this.update.bind(this)}/>
					<input
						className="task-input task-rate"
						ref="newRate"
						type="number"
						value={rate}
						onChange={this.update.bind(this)}/>
					<div className="ticking-timer">{timeSpended}</div>
					<div className="price">
						<div className="task-price">{price} RUB</div>
						<button
							type="button"
							id="delete-task"
							onClick={this.doneTasks.bind(this)}>&#xff38;
						</button>
					</div>
			</li>
		);
	}
}
