import React from 'react';

import { useRedux } from '../../../src';

const ToggleButton = () => {
	const [state, dispatch] = useRedux();

	return (
		<button onClick={() => dispatch({ type: 'TOOGLE' })}>
			{state.toggle ? 'Click to close' : 'Click to open'}
		</button>
	);
};

export default ToggleButton;
