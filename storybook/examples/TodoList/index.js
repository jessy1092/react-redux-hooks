// This example is from redux official website
// https://redux.js.org/basics/example
// I override it to use react-redux-hooks

import React from 'react';
import { createStore } from 'redux';

import { Provider } from '../../../src';

import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => (
	<Provider store={store}>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</Provider>
);

export default App;
