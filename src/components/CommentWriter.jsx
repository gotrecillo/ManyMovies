import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="comment-writer-wrapper">
        <h4><b>Post</b> a a new comment</h4>
        <textarea className="comment-writer-area" placeholder="Post a comment" />
        <button className="spoiler-button">&#x2718; Spoiler Alert?</button>
        <button className="post-button">Post comment</button>
      </div>
    );
  }
});
