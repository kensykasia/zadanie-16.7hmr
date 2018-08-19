import PropTypes from 'prop-types';
import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.add(this.state.text);
		this.setState({
			text: ''
		});
	}

	render() {
		return (
			<form className={style.form} onSubmit={this.handleSubmit}>
				<label>
					<input type="text" placeholder="Napisz zadanie" value={this.state.text} onChange={this.handleChange} />
				</label>
				<button className={style.form__button} type="submit">Dodaj</button>
			</form>
		)
	}
}

TodoForm.propTypes = {
	add: PropTypes.func
}

export default TodoForm;
