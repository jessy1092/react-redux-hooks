import React, { createContext, useContext, useEffect, useState } from 'react';

export const ReduxContext = createContext({});

export const Provider = ({ store, children }) => (
	<ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export const useRedux = () => {
	const [state, setState] = useState({});
	const context = useContext(ReduxContext);

	function handleChange() {
		setState(context.getState());
	}

	useEffect(() => context.subscribe(handleChange), [state]);

	return [state, context.dispatch];
};
