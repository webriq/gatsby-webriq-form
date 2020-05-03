"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

class WebriQForm extends _react.default.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.loadWebriQFormScript = this.loadWebriQFormScript.bind(this);
  }

  componentDidMount() {
    if (window && !window.isWebriQFormLoaded) {
      this.loadWebriQFormScript();
    }

    if (window && window.isWebriQFormLoaded) {
      window.webriqFormRefresh();
    }
  }

  loadWebriQFormScript() {
    const webriqFormScript = document.getElementById("webriqform");

    if (!webriqFormScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "webriqform";
      script.src = this.props.scriptSrc || "https://forms.webriq.com/js/initReactForms";
      document.body.appendChild(script);
      const headScript = document.getElementsByTagName("script")[0];
      headScript.parentNode.insertBefore(script, headScript);
    }
  }

  componentWillUnmount() {
    const unmountScript = this.props.unmountScript;
    const webriqFormScript = document.getElementById("webriqform");

    if (webriqFormScript && unmountScript) {
      webriqFormScript.parentNode.removeChild(webriqFormScript);
    }

    if (window && unmountScript) {
      window.isWebriQFormLoaded = false;
    }

    const webriqFormRecaptcha = document.getElementById("webriqFormRecaptcha");

    if (webriqFormRecaptcha && unmountScript) {
      webriqFormRecaptcha.parentNode.removeChild(webriqFormRecaptcha);
    }
  }

  render() {
    const _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          className = _this$props.className,
          rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "name", "className"]);
    const formId = this.props.formId || this.props["data-form-id"];
    let redirectURL = this.props.redirectUrl || this.props["data-thankyou-url"] || "/thank-you";
    return /*#__PURE__*/_react.default.createElement("form", (0, _extends2.default)({
      name: name,
      id: id,
      className: className,
      method: "POST",
      "data-form-id": formId,
      "data-thankyou-url": redirectURL,
      webriq: "true"
    }, rest), this.props.children);
  }

}

var _default = WebriQForm;
exports.default = _default;