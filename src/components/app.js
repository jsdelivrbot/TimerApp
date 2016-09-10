import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DoneItem from './done_item';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.item
		}
	}
   addTask() {
		var item = this.props.item;
		item.push(ReactDOM.findDOMNode(this.refs.myInput).value);
		ReactDOM.findDOMNode(this.refs.myInput).value = "";
		localStorage.setItem('item', JSON.stringify(item));
		this.setState({ item:item});
	}
	doneTasks(task) {
		var item = this.props.item;
		item.splice(item.indexOf(task), 1);
		localStorage.setItem('item', JSON.stringify(item));
		this.setState({ item: item});
	}
	onFormSubmit(event) {
   	event.preventDefault();
  	}
   render() {
		return (
      <div>
			<h1>Tasks: {this.props.item.length}</h1>
		  	<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Task name here..."
					ref="myInput" />
				<div className="input-group-btn">
					<button className="btn btn-secondary" onClick={this.addTask.bind(this)}>Add</button>
 				</div>
   		</form>
			<ul className="list-group">
				{this.state.item.map(function(task) {
					return <DoneItem task={task} doneTasks={this.doneTasks.bind(this)} />
				}.bind(this))}
			</ul>
		</div>
		);
   }
}
