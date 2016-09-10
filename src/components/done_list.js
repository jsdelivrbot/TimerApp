import React, { Component } from 'react';
import DoneItem from './done_item';

export default class DoneList extends Component {
	render() {
		return (
			<div>
				<ul>
		      	{/* {this.props.tasks.map(function(task) {
		            return <DoneItem task={this.props.task} done={this.props.doneTasks} />
		         }.bind(this))} */}
		      </ul>
   		</div>
		);
	}
}
