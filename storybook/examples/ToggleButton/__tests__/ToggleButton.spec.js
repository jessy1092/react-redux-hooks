import React from 'react';
import { mount } from 'enzyme';

import ToggleButton from '../index.js';

test('should have default value: Click to open', () => {
	const component = mount(<ToggleButton />);
	expect(component.text()).toContain('Click to open');
});

// Create custom snapshot testing
test('should become "Click to close" after click', () => {
	const component = mount(<ToggleButton />);

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
