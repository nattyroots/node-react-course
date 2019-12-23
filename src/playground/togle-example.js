const appRoot = document.getElementById("app");

const app = {
  show: true
};

const onDetailsClick = () => {
  if (app.show) app.show = false;
  else if (!app.show) app.show = true;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>visibility toggle</h1>
      <button onClick={onDetailsClick}>
        {app.show ? "hide details" : "show details"}
      </button>
      <div>{app.show ? <div>this is the details</div> : <div></div>}</div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
