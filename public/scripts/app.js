"use strict";

var appRoot = document.getElementById("app");

var app = {
  show: true
};

var onDetailsClick = function onDetailsClick() {
  if (app.show) app.show = false;else if (!app.show) app.show = true;
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
      app.show ? "hide details" : "show details"
    ),
    React.createElement(
      "div",
      null,
      app.show ? React.createElement(
        "div",
        null,
        "this is the details"
      ) : React.createElement("div", null)
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
