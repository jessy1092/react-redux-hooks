import React from 'react';
import PropTypes from 'prop-types';

import { setVisibilityFilter } from '../actions';
import { useRedux } from '../../../../src';

const Link = ({ filter, children }) => {
	const [state, dispatch] = useRedux();

	const active = state.visibilityFilter === filter;

	return (
		<button
			onClick={() => dispatch(setVisibilityFilter(filter))}
			disabled={active}
			style={{
				marginLeft: '4px',
			}}
		>
			{children}
		</button>
	);
};

Link.propTypes = {
	filter: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Link;
