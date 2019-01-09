import React from 'react';
import PropTypes from 'prop-types';

import * as actionCreators from '../actions';
import { useRedux } from '../../../../src';

const useFilterLink = filter =>
	useRedux(({ visibilityFilter }) => visibilityFilter === filter, actionCreators);

const Link = ({ filter, children }) => {
	const [active, { setVisibilityFilter }] = useFilterLink(filter);

	return (
		<button
			onClick={() => setVisibilityFilter(filter)}
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
