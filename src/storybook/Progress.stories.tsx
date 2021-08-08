import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress from '../components/Progress';

export default {
  title: 'Example/Progress',
  component: Progress
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Progressing = Template.bind({});
Progressing.args = {
    percent: 20,
    showText:true,
    strokeHeight:20,
    styles:{'backgroundColor':'orange',width:'300px'}
};
