import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import TimerInput from './components/timer_input';
// import DoneList from './components/done_list';
import DoneItem from './components/done_item';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: this.props.tasks
		}
	}
   addTask() {
		var tasks = this.props.tasks;
		tasks.push(ReactDOM.findDOMNode(this.refs.myInput).value);
		ReactDOM.findDOMNode(this.refs.myInput).value = "";
		localStorage.setItem('tasks', JSON.stringify(tasks));
		this.setState({ tasks:tasks});
	}
	doneTasks(task) {
		var tasks = this.props.tasks;
		tasks.splice(tasks.indexOf(task), 1);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		this.setState({ tasks: tasks});
	}
	// onFormSubmit(event) {
	// 	event.preventDefault();
	// 	this.setState({ tasks: '' });
	// }
   render() {
		return (
      <div>
        <h1>Tasks: {this.props.tasks.length}</h1>
        <ul>
        {
          this.state.tasks.map(function(task) {
				var keyID = 0;
            return <DoneItem task={task} doneTasks={this.doneTasks.bind(this)} />
          }.bind(this))
        }
        </ul>
        <input type="text" ref="myInput" />
        <button onClick={this.addTask.bind(this)}>Start</button>
      </div>
    );
   }
}

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

ReactDOM.render(
    <App tasks={tasks} />,
    document.getElementById('container')
);
