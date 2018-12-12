import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import ToggleButton from '../index.js';

const stories = storiesOf('ToggleButton', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => <ToggleButton />);
