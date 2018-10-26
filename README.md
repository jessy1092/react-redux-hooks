react-redux-hooks
=====

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)

The easiest way to connect redux. Power by [react hooks](https://reactjs.org/docs/hooks-intro.html).

## Getting Started

#### Connect to redux in component

Just use `useRedux`. It would return `state` and `dispatch`

```javascript
import { useRedux } from 'react-redux-hooks';

const ToggleButton = () => {
	const [state, dispatch] = useRedux();

	return (
		<button onClick={() => dispatch({ type: 'TOGGLE' })}>
			{state.toggle ? 'Click to close' : 'Click to open'}
		</button>
	);
};
```

#### Top level Provider

Just pass redux store with `Provider` like `react-redux`.

```javascript
import React from 'react';
import { createStore } from 'redux';
import { Provider, useRedux } from 'react-redux-hooks';

const store = createStore((state = { toggle: false }, action) => {
	if (action.type === 'TOGGLE') {
		return { toggle: !state.toggle };
	}

	return state;
});

ReactDOM.render(
	<Provider store={store}>
		<ToggleButton />
	</Provider>,
	document.getElementById('content'),
);

```
