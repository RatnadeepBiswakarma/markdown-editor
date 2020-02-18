import React, { Component } from "react";
import Window from "./Window";

class MarkdownApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: `
# Markdown Editor
<h2>- FCC project by Ratnadeep</h2>

## You can write heading 2 like this 

### This is heading 3

### Inline Code goes like below

\`let myFirstVariable = "hello world"\`

### Write multiline code like below

\`\`\`
function getSkills() {
      return ['Javascript', 'VueJs', 'React', 'CSS', 'HTML']
}
\`\`\`

### Start your sentence with \`>\` to make it a blockquote

> Look at me 



[Github Profile](https://github.com/RatnadeepBiswakarma) 

[LinkedIn](https://www.linkedin.com/in/ratnadeepbiswakarma/)


### About this project

**Languages used:**

1. React
2. html
3. CSS
4. JavaScript

**Background svg from:** https://www.svgbackgrounds.com/


**FreeCodeCamp**


![FreeCodeCamp Logo](https:////discourse-user-assets.s3.amazonaws.com/original/2X/c/cf6e8e0a75acb7aa900eb304270a6407ae1d9e2c.jpg)
`,
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
          markdownContent={this.state.markdownContent}
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
