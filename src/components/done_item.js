import React, { Component } from 'react';

export default class DoneItem extends Component {
	doneTasks() {
		this.props.doneTasks(this.props.task);
	}
	render() {
   	return (
			<li className="list-group-item clearfix">
				{this.props.task}
				<div className="pull-right" role="group">
				<button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.doneTasks.bind(this)}>&#xff38;</button>
				</div>
			</li>
		);
	}
}
