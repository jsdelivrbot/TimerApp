import React, { Component } from 'react';
//import TaskName from './TimerInput/task_name';

export default class DoneItem extends Component {

	doneTasks() {
		this.props.doneTasks(task);
	}
	render() {
		let task = this.props.task;
   	return <li onClick={this.props.doneTasks}>{task}</li>
	}
}
