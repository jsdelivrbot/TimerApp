import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import TimerInput from './components/timer_input';
import DoneList from './components/done_list';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: this.props.tasks
		}
	}
   addTask() {
		var tasks = this.props.tasks;
		tasks.push(React.findDOMNode(this.refs.myInput).value);
		React.findDOMNode(this.refs.myInput).value = "";
		localStorage.setItem('tasks', JSON.stringify(tasks));
		this.setState({ tasks:tasks});
		console.log(tasks);
	}
	// doneTasks(task) {
	// 	var tasks = this.props.tasks;
	// 	tasks.splice(tasks.indexOf(tasks), 1);
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// 	this.setState({ tasks:tasks});
	// }
	// // onFormSubmit(event) {
	// 	event.preventDefault();
	// 	this.setState({ tasks: '' });
	// }
   render() {
      return (
         <div>
            <header className="header">
      			<h1>Tasks: {this.props.tasks.length}</h1>
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
								onClick={this.addTask}>Start</button>
						</div>
		 			</form>
				</header>
				<div>
  					<DoneList tasks={this.state.tasks} doneTasks={this.doneTasks}/>
  				</div>
         </div>
      );
   }
}

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

ReactDOM.render(<App tasks={tasks}/>, document.querySelector('.container'));
