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
      app.options.length > 0 ? "here are your options" : "no options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
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

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
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
