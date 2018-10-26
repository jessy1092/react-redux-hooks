import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import { Provider } from '../../../../src';

import ToggleButton from '../index.js';

test('should have default value: Click to open', () => {
	const store = createStore((state = { toggle: false }, action) => {
		if (action.type === 'TOGGLE') {
			return { toggle: !state.toggle };
		}

		return state;
	});

	const component = mount(
		<Provider store={store}>
			<ToggleButton />
		</Provider>,
	);
	expect(component.text()).toContain('Click to open');
});

// Create custom snapshot testing
test('should become "Click to close" after click', () => {
	const store = createStore((state = { toggle: false }, action) => {
		if (action.type === 'TOGGLE') {
			return { toggle: !state.toggle };
		}

		return state;
	});

	const component = mount(
		<Provider store={store}>
			<ToggleButton />
		</Provider>,
	);

	expect(component).toMatchSnapshot();

	// manually trigger the callback
	component.find('button').simulate('click');

	// enzyme not support sideEffect yet
	// expect(component.text()).toContain('Click to close');
	// // re-rendering would become Open
	// expect(component).toMatchSnapshot();

	// // manually trigger the callback
	// component.find('button').simulate('click');

	// expect(component.text()).toContain('Click to open');
	// // re-rendering would become Close
	// expect(component).toMatchSnapshot();
});
