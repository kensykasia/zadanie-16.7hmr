import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'nauka z Kodillą'
            }, {
                id: 2,
                text: 'zadanie z Kodillą'
            }, {
                id: 3,
                text: 'nakarmić dziecko :-)'
            }]
        };
        this.add = this.addTodo.bind(this);
        this.remove = this.removeTodo.bind(this);
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='To do or not to do' numberOfTasks={this.state.data.length} />
                <TodoForm add={this.add} />
                <TodoList
                    remove={this.remove}
                    todos={this.state.data} />
            </div>
        );
    }
}

export default hot(module)(App);
