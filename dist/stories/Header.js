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
        "",
        "\n            ",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        '\n  <header>\n    <div class="wrapper">\n      <div>\n        <svg\n          width="32"\n          height="32"\n          viewBox="0 0 32 32"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n              fill="#FFF"\n            />\n            <path\n              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n              fill="#555AB9"\n            />\n            <path\n              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"\n              fill="#91BAF8"\n            />\n          </g>\n        </svg>\n        <h1>Acme</h1>\n      </div>\n      <div>\n        ',
        "\n      </div>\n    </div>\n  </header>\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { html } from "lit-html";
import { Button } from "./Button";
import "./header.css";
export var Header = function(param) {
    var user = param.user, onLogin = param.onLogin, onLogout = param.onLogout, onCreateAccount = param.onCreateAccount;
    return html(_templateObject1(), user ? Button({
        size: "small",
        onClick: onLogout,
        label: "Log out"
    }) : html(_templateObject(), Button({
        size: "small",
        onClick: onLogin,
        label: "Log in"
    }), Button({
        primary: true,
        size: "small",
        onClick: onCreateAccount,
        label: "Sign up"
    })));
};

//# sourceMappingURL=Header.js.map