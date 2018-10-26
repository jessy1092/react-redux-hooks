import { mount } from 'enzyme';
import expect from 'expect';

const createSnapshot = (name, story) => {
	it(name, () => {
		expect(mount(story)).toMatchSnapshot();
	});
};

export const storiesOf = function storiesOf() {
	const api = {};
	let story;

	api.add = (name, func, { ignoreTest } = { ignoreTest: false }) => {
		if (!ignoreTest) {
			story = func();
			createSnapshot(name, story);
		} else {
			it(name, () => {});
		}
		return api;
	};

	api.addWithInfo = (name, func) => {
		story = func();
		createSnapshot(name, story);
		return api;
	};

	api.addDecorator = () => {};

	return api;
};
