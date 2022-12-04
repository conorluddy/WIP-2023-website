import { Button } from "./Button";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        backgroundColor: {
            control: "color"
        },
        onClick: {
            action: "onClick"
        },
        size: {
            control: {
                type: "select"
            },
            options: [
                "small",
                "medium",
                "large"
            ]
        }
    }
};
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
var Template = function(args) {
    return Button(args);
};
export var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button"
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: "Button"
};
export var Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button"
};
export var Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button"
};

//# sourceMappingURL=Button.stories.js.map