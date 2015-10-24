import React from 'react';
import {thousandsToK} from '../lib/MathUtils.js';

export default React.createClass({

  getFormatedVotes: function() {
    return thousandsToK(this.props.votes);
  },

  getFormatedCollected: function() {
    return thousandsToK(this.props.collected);
  },

  render: function() {
    return (
      <ul className="movie-social-stats">
        <li>{this.props.score} <span className="stat-label">%</span></li>
        <li>{this.getFormatedVotes()} <span className="stat-label">Votes</span></li>
        <li>{this.getFormatedCollected()} <span className="stat-label">Collected</span></li>
      </ul>
    );
  }
});
