import React, { Component } from 'react';

export default class TaskName extends Component {
	render() {
		return (
			<div>
				<input
					type='text'
					placeholder='Task name here'
					className='form-control'
					value={this.props.task}
					onChange={this.props.onInputChange}/>
			</div>
		);
	}
}
