import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DoneItem extends Component {
	doneTasks() {
		this.props.doneTasks(this.props.i);
	}
	update() {
		var newTitle = ReactDOM.findDOMNode(this.refs.newTitle).value;
		var newRate = ReactDOM.findDOMNode(this.refs.newRate).value;
      this.props.onInputChange(this.props.i, newTitle, newRate);
	}
	render() {
		const {title, rate, count} = this.props;
		let hours = count/3600;
		var h = Math.floor(count/3600);
		var m = Math.floor(count%3600/60);
		var s = Math.floor(count%3600%60);
		var timeSpended = ((h > 0 ? h:"00" + ":" + (m < 10 ? "0" : "0") : "") + m + ":" + (s < 10 ? "0" : "") + s);
		const price = Math.round(hours*rate * 10) / 10;

   	return (
			<li className="list-group-item clearfix">
				<input ref="newTitle" type="text" value={title} onChange={this.update.bind(this)}/>
				<input ref="newRate" type="number" value={rate} onChange={this.update.bind(this)}/>
				<div>{price} RUB</div>
				<div>Time spended: {timeSpended}</div>
				<div className="pull-right" role="group">
					<button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.doneTasks.bind(this)}>&#xff38;</button>
				</div>
			</li>
		);
	}
}
