"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put the life in hands of the machine",
  options: []
};
var appRoot = document.getElementById("app");
var renderFunction = function renderFunction() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        { key: "1" },
        "options.one"
      ),
      React.createElement(
        "li",
        { key: "2" },
        "options.two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderFunction();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderFunction();
};

renderFunction();
