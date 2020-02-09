import React, { Component } from "react";
import Editor from "./Editor";
import Renderer from "./Renderer";
import "./css/window.css";

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "# hello world"
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.handleInput(e.target.value);
  }
  render() {
    return (
      <div className="window-container">
        <div className="title-bar">
          <div className="button-container">
            <div className="button button-minimize">
              <span className="circle"></span>
            </div>
            <div className="button button-maximize">
              <span className="circle"></span>
            </div>
          </div>
          <span>{this.props.name}</span>
        </div>
        <div className="content">
          {this.props.type === "editor" ? (
            <Editor handleInput={this.handleInput} />
          ) : (
            <Renderer content={this.props.markdownContent} />
          )}
        </div>
      </div>
    );
  }
}

export default Window;
