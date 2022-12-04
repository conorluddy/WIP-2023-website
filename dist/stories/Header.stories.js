import { Header } from "./Header";
export default {
    title: "Example/Header"
};
var Template = function(args) {
    return Header(args);
};
export var LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {}
};
export var LoggedOut = Template.bind({});
LoggedOut.args = {};

//# sourceMappingURL=Header.stories.js.map