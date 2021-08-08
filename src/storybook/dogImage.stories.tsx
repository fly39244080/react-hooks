import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DogImage from '../components/dogImage';

export default {
  title: 'Example/DogImage',
  component: DogImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof DogImage>;

const Template: ComponentStory<typeof DogImage> = (args) => <DogImage {...args} />;

export const DogImage2 = Template.bind({});

