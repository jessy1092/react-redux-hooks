import React from 'react';

import { useRedux } from '../../../../src';

import { toggleTodo, VisibilityFilters } from '../actions';

import Todo from '../components/Todo';

const getVisibleTodos = ({ todos, visibilityFilter }) => {
	switch (visibilityFilter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error(`Unknown filter: ${visibilityFilter}`);
	}
};

const useTodoList = () => useRedux(getVisibleTodos, { toggleTodo }, { pure: true });

const TodoList = () => {
	const [todos, actions] = useTodoList();

	return (
		<ul>
			{todos.map(todo => (
				<Todo key={todo.id} {...todo} onClick={() => actions.toggleTodo(todo.id)} />
			))}
		</ul>
	);
};

export default TodoList;
