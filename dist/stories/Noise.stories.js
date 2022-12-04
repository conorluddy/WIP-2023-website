import { Noise } from "./Noise";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: "Example/Noise"
};
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
var Template = function() {
    return new Noise();
};
export var Primary = Template.bind({});
Primary.args = {};

//# sourceMappingURL=Noise.stories.js.map