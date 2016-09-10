import React, { Component } from 'react';
//import TaskName from './TimerInput/task_name';

export default class DoneItem extends Component {
	doneTask() {
		this.props.doneTasks(this.props.task);
	}
	render() {
		return <li onClick={this.doneTask}>{this.props.task}</li>
	}
}
