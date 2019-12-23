"use strict";

var appRoot = document.getElementById("app");

var visibility = true;

var onDetailsClick = function onDetailsClick() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "visibility toggle"
    ),
    React.createElement(
      "button",
      { onClick: onDetailsClick },
      visibility ? "hide details" : "show details"
    ),
    React.createElement(
      "div",
      null,
      visibility && React.createElement(
        "div",
        null,
        "this is the details"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
