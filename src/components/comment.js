import React, {Component} from "react";

export default class Comment extends Component {

  constructor(props){
    super(props);
    this.commentBox = React.createRef(); // Creates a reference to inject the <script> element
  }
  componentDidMount () {
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "AMueller92/alexmueller.tech-comments");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", 'github-light');
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <div style={{marginTop: 60}}>
          <div ref={this.commentBox} className="comment-box"/>
        </div>
    );
  }
}
