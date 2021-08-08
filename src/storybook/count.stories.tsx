import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from '../components/count';

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const count = Template.bind({});

