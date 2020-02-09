import React, { Component } from "react";
import Window from "./Window";

class MarkdownApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(data) {
    this.setState({ markdownContent: data });
  }

  render() {
    return (
      <div>
        <Window type="editor" name="Editor" handleInput={this.handleInput} />
        <Window
          type="renderer"
          name="Preview"
          markdownContent={this.state.markdownContent}
        />
      </div>
    );
  }
}

export default MarkdownApp;
