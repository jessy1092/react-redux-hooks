import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import TodoList from '../index.js';

const stories = storiesOf('TodoList', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => <TodoList />);
