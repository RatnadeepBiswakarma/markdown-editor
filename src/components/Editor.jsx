import React, { Component } from "react";
import "./css/Editor.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ markdownContent: e.target.value });
    this.props.handleInput(e.target.value);
  }

  render() {
    return (
      <div className="editor-container">
        <textarea
          type="text"
          id="editor"
          value={this.props.content}
          onChange={this.props.handleInput}
        />
      </div>
    );
  }
}

export default Editor;
