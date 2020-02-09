import React, { Component } from "react";
import marked from "marked";

class Renderer extends Component {
  constructor(props) {
    super(props);
    this.renderer = React.createRef();
    this.getMarkdown = this.getMarkdown.bind(this);
  }
  getMarkdown(content) {
    return marked(content);
  }
  componentDidUpdate() {
    this.renderer.current.innerHTML = this.getMarkdown(this.props.content);
  }
  componentDidMount() {
    this.renderer.current.innerHTML = this.getMarkdown(this.props.content);
  }
  render() {
    return <div ref={this.renderer} id="my-html-content"></div>;
  }
}

export default Renderer;
