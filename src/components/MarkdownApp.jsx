import React, { Component } from "react";
import Window from "./Window";

class MarkdownApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: "",
      fullScreenWindow: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.toggleWindowSize = this.toggleWindowSize.bind(this);
  }

  handleInput(data) {
    this.setState({ markdownContent: data });
  }

  toggleWindowSize(type) {
    console.log(type);
    if (this.state.fullScreenWindow === type) {
      this.setState({ fullScreenWindow: null });
    } else {
      this.setState({ fullScreenWindow: type });
    }
  }

  render() {
    return (
      <div className="windows-container">
        <Window
          type="editor"
          name="Editor"
          handleInput={this.handleInput}
          showFullScreen={
            this.state.fullScreenWindow === "editor" ? true : false
          }
          toggleWindowSize={this.toggleWindowSize}
        />
        <Window
          type="renderer"
          name="Preview"
          showFullScreen={
            this.state.fullScreenWindow === "renderer" ? true : false
          }
          markdownContent={this.state.markdownContent}
          toggleWindowSize={this.toggleWindowSize}
        />
      </div>
    );
  }
}

export default MarkdownApp;
