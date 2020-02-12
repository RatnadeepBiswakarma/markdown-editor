import React, { Component } from "react";
import Editor from "./Editor";
import Renderer from "./Renderer";
import "./css/window.css";

class Window extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleWindowButtonClick = this.handleWindowButtonClick.bind(this);
  }

  handleInput(e) {
    this.props.handleInput(e.target.value);
  }

  handleWindowButtonClick() {
    this.props.toggleWindowSize(this.props.type);
  }
  render() {
    return (
      <div
        onDoubleClick={this.handleWindowButtonClick}
        className={`window-container ${
          this.props.showFullScreen ? "maximize-window" : ""
        } ${
          this.props.type === "editor" ? "editor-window" : "renderer-window"
        }`}
      >
        <div title="Double click to toggle window size" className="title-bar">
          <div
            className="button-container"
            title="Toggle Window Size"
            onClick={this.handleWindowButtonClick}
          >
            <div className="button button-maximize">
              <span className="icon">+</span>
            </div>
          </div>
          <span>{this.props.name}</span>
        </div>
        <div className="content">
          {this.props.type === "editor" ? (
            <Editor
              handleInput={this.handleInput}
              content={this.props.markdownContent}
            />
          ) : (
            <Renderer content={this.props.markdownContent} />
          )}
        </div>
      </div>
    );
  }
}

export default Window;
