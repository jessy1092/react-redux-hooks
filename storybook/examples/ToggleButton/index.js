import React from 'react';
import { createStore } from 'redux';

import { Provider, useRedux } from '../../../src';

const store = createStore((state = { toggle: false }, action) => {
	if (action.type === 'TOGGLE') {
		return { toggle: !state.toggle };
	}

	return state;
});

const ToggleButton = () => {
	const [state, dispatch] = useRedux();

	return (
		<button onClick={() => dispatch({ type: 'TOGGLE' })}>
			{state.toggle ? 'Click to close' : 'Click to open'}
		</button>
	);
};

const RootComponent = () => (
	<Provider store={store}>
		<ToggleButton />
	</Provider>
);

export default RootComponent;
