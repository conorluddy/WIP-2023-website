import { BackgroundNoise } from "./BackgroundNoise";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: "Example/BackgroundNoise"
};
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
var Template = function() {
    return new BackgroundNoise();
};
export var Primary = Template.bind({});
Primary.args = {};

//# sourceMappingURL=BackgroundNoise.stories.js.map