console.log("app.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put the life in hands of the machine",
  options: []
};
const appRoot = document.getElementById("app");
const renderFunction = () => {
  const template = (
    <div>
      <p>{app.title}</p>
      <h1>{app.subtitle}</h1>
      <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
};
const onRemoveAll = () => {
  app.options = [];
  renderFunction();
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderFunction();
};

renderFunction();
