react-redux-hooks
=====

[![Commitizen friendly][commitizen-image]][commitizen-image] [![Standard Version][standard-version-image]][standard-version-url] [![npm][npm-image]][npm-url] [![Dependency Status][david-dm-image]][david-dm-url]

The easiest way to connect redux. Power by [react hooks](https://reactjs.org/docs/hooks-intro.html).

## Getting Started

### Install

```
npm install react-redux-hooks
```

or

```
yarn add react-redux-hooks
```

### Usage

[See full examples](https://github.com/jessy1092/react-redux-hooks/tree/master/storybook/examples)

#### Connect to redux in component

Just use `useRedux`. It would return `state` and `dispatch`

```javascript
import { useRedux } from 'react-redux-hooks';

const ToggleButton = () => {
	const [state, dispatch] = useRedux();

	return (
		<button onClick={() => dispatch({ type: 'TOGGLE' })}>
			{state.toggle ? 'Click to close' : 'Click to open'}
		</button>
	);
};
```

#### Top level Provider

Just pass redux store with `Provider` like `react-redux`.

```javascript
import React from 'react';
import { createStore } from 'redux';
import { Provider, useRedux } from 'react-redux-hooks';

const store = createStore((state = { toggle: false }, action) => {
	if (action.type === 'TOGGLE') {
		return { toggle: !state.toggle };
	}

	return state;
});

ReactDOM.render(
	<Provider store={store}>
		<ToggleButton />
	</Provider>,
	document.getElementById('content'),
);

```

## Roadmap

- Shallow compare
- Customize Selector

Discussion welcome to [open issue](https://github.com/jessy1092/react-redux-hooks/issues)


## Release Notes

see [CHANGELOG.md](https://github.com/jessy1092/react-redux-hooks/blob/master/CHANGELOG.md)


## Contribute
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

1. Fork it.
2. Create your feature-branch `git checkout -b your-new-feature-branch`
3. Commit your change `git commit -am 'Add new feature'`
4. Push to the branch `git push origin your-new-feature-branch`
5. Create new Pull Request with `master` branch

### Commit Message Style

Please following [angular format](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md).

## License

The MIT License (MIT)

Copyright (c) 2018 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen-url]: http://commitizen.github.io/cz-cli/

[standard-version-image]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[standard-version-url]: https://github.com/conventional-changelog/standard-version

[npm-image]: https://img.shields.io/npm/v/react-redux-hooks.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-redux-hooks

[david-dm-image]: https://david-dm.org/jessy1092/react-redux-hooks.svg?style=flat-square
[david-dm-url]: https://david-dm.org/jessy1092/react-redux-hooks

[david-dm-dev-image]: https://david-dm.org/jessy1092/react-redux-hooks/dev-status.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/jessy1092/react-redux-hooks#info=devDependencies
