import React from 'react';

import { useRedux } from '../../../../src';

import { toggleTodo, VisibilityFilters } from '../actions';

import Todo from '../components/Todo';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error(`Unknown filter: ${filter}`);
	}
};

const TodoList = () => {
	const [state, dispatch] = useRedux();

	const todos = getVisibleTodos(state.todos, state.visibilityFilter);

	return (
		<ul>
			{todos.map(todo => (
				<Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
			))}
		</ul>
	);
};

export default TodoList;
