import { configure } from '@storybook/react';

const req = require.context('./examples/', true, /stories\.js$/);

function loadStories() {
	req.keys().forEach(req);
}
configure(loadStories, module);
