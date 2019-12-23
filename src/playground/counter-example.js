console.log("app.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put the life in hands of the machine"
};
const template = (
  <div>
    <p>{app.title}</p>
    <h1>{app.subtitle}</h1>
    <ol>
      <li key="1"> item one</li>
      <li key="2"> item two</li>
    </ol>
  </div>
);

let count = 1;
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          count = count + 1;
          renderCounterApp();
          return count;
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          count = count - 1;
          renderCounterApp();
          return count;
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          count = 0;
          renderCounterApp();
        }}
      >
        reset
      </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();

const appRoot = document.getElementById("app"); 