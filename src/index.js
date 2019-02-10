import { bindActionCreators } from 'redux';
import React, { createContext, useContext, useEffect, useState } from 'react';
import shallowEqual from './shallowEqual';

export const ReduxContext = createContext({});

export const Provider = ({ store, children }) => (
	<ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export const useReduxCore = (selector, { pure = false, shouldHooksUpdate }) => {
	const context = useContext(ReduxContext);
	const [state, setState] = useState(selector(context.getState()));

	function handleChange() {
		const updateState = selector(context.getState());

		// if shouldHooksUpdate not set and pure is false, update state every time
		let shouldUpdate =
			typeof shouldHooksUpdate === 'function' ? shouldHooksUpdate(updateState, state) : true;

		if (pure) {
			shouldUpdate = !shallowEqual(updateState, state);
		}

		if (shouldUpdate) {
			setState(updateState);
		}
	}

	// Only subscribe on mount, unsubscribe on unmount
	useEffect(() => context.subscribe(handleChange), []);

	return [state, context.dispatch];
};

const defaultSelector = state => state;

export const useRedux = (originSelector, actions, options = {}) => {
	const selector = typeof originSelector !== 'function' ? defaultSelector : originSelector;

	const [state, dispatch] = useReduxCore(selector, options);

	if (typeof actions === 'undefined' || actions === null) {
		return [state, dispatch];
	}

	const boundActions =
		typeof actions === 'function' ? actions(dispatch) : bindActionCreators(actions, dispatch);

	return [state, boundActions];
};
