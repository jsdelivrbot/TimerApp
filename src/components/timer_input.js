import React, { Component } from 'react';
// import PriceInput from './price_input';
// import Timer from './timer';
// import StartStopBtn from './start_stop_btn';

export default class TimerInput extends Component {
  // onstructor(props) {
  //     super(props);
  //     this.state = {
  //        newTask: ''
  //     }
  //     this.onInputChange=this.onInputChange.bind(this);
  //  }
  //  onInputChange(event) {
  // this.setState({newTask: event.target.value});
  //

	render() {
		return (
			<form className="input-group">
				<input
					type='text'
					ref='myInput'
					className='form-control'
					placeholder='Task name here...'/>
				<div className='input-group-btn'>
					<button
						type='submit'
						className='btn btn-default'
						onClick={this.props.addTask}>Start</button>
				</div>
 			</form>
		);
	}
}
