function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";
export default {
    title: "Example/Page"
};
var Template = function(args) {
    return Page(args);
};
export var LoggedIn = Template.bind({});
LoggedIn.args = _objectSpread({}, HeaderStories.LoggedIn.args);
export var LoggedOut = Template.bind({});
LoggedOut.args = _objectSpread({}, HeaderStories.LoggedOut.args);

//# sourceMappingURL=Page.stories.js.map