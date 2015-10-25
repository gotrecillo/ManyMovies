import React from 'react';

export default React.createClass({
  getDate: function() {
    return this.props.date;
  },

  render: function() {
    return (
      <div className="comment">
        <p className="comment-heading">{this.props.author} on <span className="comment-date">{this.getDate()}</span></p>
        <div className="comment-body">{this.props.text}</div>
      </div>
    );
  }
});
