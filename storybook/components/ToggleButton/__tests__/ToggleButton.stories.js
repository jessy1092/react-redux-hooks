import React from 'react';
import { createStore } from 'redux';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import ToggleButton from '../index.js';

import { Provider } from '../../../../src';

const stories = storiesOf('ToggleButton', module);

stories.addDecorator(withKnobs);

const store = createStore((state = { toggle: false }, action) => {
	if (action.type === 'TOGGLE') {
		return { toggle: !state.toggle };
	}

	return state;
});

stories.add('__interactive', () => (
	<Provider store={store}>
		<ToggleButton />
	</Provider>
));
