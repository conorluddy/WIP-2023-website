function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        '\n    <button\n      type="button"\n      class=',
        "\n      style=",
        "\n      @click=",
        "\n    >\n      ",
        "\n    </button>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import "./button.css";
/**
 * Primary UI component for user interaction
 */ export var Button = function(param) {
    var primary = param.primary, _backgroundColor = param.backgroundColor, backgroundColor = _backgroundColor === void 0 ? null : _backgroundColor, size = param.size, label = param.label, onClick = param.onClick;
    var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return html(_templateObject(), [
        "storybook-button",
        "storybook-button--".concat(size || "medium"),
        mode, 
    ].join(" "), styleMap({
        backgroundColor: backgroundColor
    }), onClick, label);
};

//# sourceMappingURL=Button.js.map