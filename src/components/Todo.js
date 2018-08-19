import PropTypes from 'prop-types';
import React from 'react';
import style from './Todo.css';

const Todo = ({ task, remove }) => (
	<li className={style.todo__item}>
		{task.text}
		<button className={style.todo__button} onClick={() => remove(task.id)}> X </button>
	</li>
);

Todo.propTypes = {
	task: PropTypes.object,
	remove: PropTypes.func
}

export default Todo;
