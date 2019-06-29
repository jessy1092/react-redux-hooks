import { bindActionCreators } from 'redux';
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import shallowEqual from './shallowEqual';

export const ReduxContext = createContext({});

export const Provider = ({ store, children }) => (
	<ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export const useReduxCore = (selector, { shouldHooksUpdate }) => {
	const store = useContext(ReduxContext);
	const runGetState = () => selector(store.getState());

	const [state, setState] = useState(runGetState);

	const lastStore = useRef(store);
	const lastSelector = useRef(selector);
	const lastUpdateState = useRef(state);

	function handleChange() {
		const updateState = runGetState();

		// Can custom setup shallowEqual method on shouldHooksUpdate
		const shouldUpdate =
			typeof shouldHooksUpdate === 'function'
				? shouldHooksUpdate(updateState, lastUpdateState.current)
				: !shallowEqual(updateState, lastUpdateState.current);

		if (shouldUpdate) {
			setState(updateState);
			lastUpdateState.current = updateState;
		}
	}

	if (lastStore.current !== store || lastSelector.current !== selector) {
		lastStore.current = store;
		lastSelector.current = selector;

		handleChange();
	}

	useEffect(() => {
		let didUnsubscribe = false;

		const checkForUpdates = () => {
			if (didUnsubscribe) {
				return;
			}

			handleChange();
		};

		checkForUpdates();

		const unsubscribe = store.subscribe(checkForUpdates);
		return () => {
			didUnsubscribe = true;
			unsubscribe();
		};
	}, [store, selector]);

	return [state, store.dispatch];
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
