import type { Meta, StoryFn } from "@storybook/web-components";
import { Noise } from "./Noise";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Noise",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: StoryFn<unknown> = () => new Noise();

export const Primary = Template.bind({});

Primary.args = {};
