import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/ButtonCol';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: true,
  label: '测试button组件',
  size: 'lg',
  btnType:'primary',
  children:'ddd'
};

