class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onDetailsClick = this.onDetailsClick.bind(this);
    this.state = {
      visibility: true
    };
  }

  onDetailsClick() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>visibility toggle</h1>
        <button onClick={this.onDetailsClick}>
          {this.state.visibility ? "hide details" : "show details"}
        </button>
        <div>{this.state.visibility && <div>this is the details</div>}</div>
      </div>
    );
  }
}
ReactDOM.render(
  <VisibilityToggle></VisibilityToggle>,
  document.getElementById("app")
);
