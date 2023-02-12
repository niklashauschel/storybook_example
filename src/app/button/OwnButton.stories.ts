// Button.stories.ts

import { Meta, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
  });
  
export const _Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
_Default.args = {
    label: 'Button',
};

export const red = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
red.args = {
    label: 'Button',
    backgroundColor: '#1faac2',
    textColor: 'black'
};

