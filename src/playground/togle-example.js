const appRoot = document.getElementById("app");

let visibility = true;

const onDetailsClick = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>visibility toggle</h1>
      <button onClick={onDetailsClick}>
        {visibility ? "hide details" : "show details"}
      </button>
      <div>{visibility && <div>this is the details</div>}</div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
