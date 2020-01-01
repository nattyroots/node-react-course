import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      title: "indecision",
      subtitle: "put your life in the hands of a computer",
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      options: [];
    });
  }

  handleDeleteOption(option) {
    console.log("hdo", option);
  }
  handlePick() {
    const options = this.state.options;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      console.log("in handle addd  option");
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    } else {
      this.setState(prevState => {
        return { options: prevState.options.concat([option]) };
      });
    }
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        ></Header>
        <Action
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        ></Options>
        <AddOption handleAddOption={this.handleAddOption}></AddOption>
      </div>
    );
  }
}
export default IndecisionApp;
