// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import TimerInput from './TimerInput/timer_input';
// import DoneList from './done_list';
//
// class App extends Component {
//    addTask() {
// 		var tasks = this.props.tasks;
// 		todos.push(React.findDOMNode(this.refs.myInput).value);
// 		React.findDOMNode(this.refs.myInput).value = "";
// 		localStorage.setItem('tasks', JSON.stringify(tasks));
// 		this.setState({ tasks });
// 	}
//    render() {
//       return (
//          <div>
//             <header className="header">
//       			<h1>Tasks</h1>
//                <TimerInput addTask={this.addTask}/>
//                <DoneList tasks={this.props.tasks}/>
//             </header>
//          </div>
//       );
//    }
// }
//
// var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//
// ReactDOM.render(<App tasks={tasks}/>, document.querySelector('.container'));
