import React, { createContext, useContext, useEffect, useState } from 'react';

export const ReduxContext = createContext({});

export const Provider = ({ store, children }) => (
	<ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export const useRedux = () => {
	const context = useContext(ReduxContext);
	const [state, setState] = useState(context.getState());

	function handleChange() {
		setState(context.getState());
	}

	useEffect(() => context.subscribe(handleChange), [state]);

	return [state, context.dispatch];
};
