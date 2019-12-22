"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put the life in hands of the machine"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    app.title
  ),
  React.createElement(
    "h1",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      { key: "1" },
      " item one"
    ),
    React.createElement(
      "li",
      { key: "2" },
      " item two"
    )
  )
);

var count = 0;
var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          count = count + 1;
          renderCounterApp();
          return count;
        }
      },
      "+1"
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          count = count - 1;
          renderCounterApp();
          return count;
        }
      },
      "-1"
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          count = 0;
          renderCounterApp();
        }
      },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById("app");

renderCounterApp();
