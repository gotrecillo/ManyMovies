import React from 'react';

export default React.createClass({
  getStyle: function() {
    return this.props.certification.toLowerCase() + '-certification';
  },

  render: function() {
    return (
      <span className={this.getStyle()}>{this.props.certification}</span>
    );
  }
});
