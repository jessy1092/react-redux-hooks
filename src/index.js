import { bindActionCreators } from 'redux';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ReduxContext = createContext({});

export const Provider = ({ store, children }) => (
	<ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export const useReduxCore = () => {
	const context = useContext(ReduxContext);
	const [state, setState] = useState(context.getState());

	function handleChange() {
		setState(context.getState());
	}

	useEffect(() => context.subscribe(handleChange), [state]);

	return [state, context.dispatch];
};

export const useRedux = (selector, actions) => {
	const [state, dispatch] = useReduxCore();
	const selectedState = typeof selector !== 'function' ? state : selector(state);

	if (typeof actions === 'undefined' || actions === null) {
		return [selectedState, dispatch];
	}

	const boundActions =
		typeof actions === 'function' ? actions(dispatch) : bindActionCreators(actions, dispatch);

	return [selectedState, boundActions];
};
