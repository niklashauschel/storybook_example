// Button.stories.ts

import { Meta, Story } from '@storybook/angular';

import { ButtonComponent } from '../../src/app/button/button.component';

export default {
  title: 'Own Button Lib',
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
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    label: 'Button',
};

export const Blue = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Blue.args = {
    label: 'Button',
    backgroundColor: '#1faac2',
    textColor: 'black'
};

