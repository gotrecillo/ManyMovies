import React from 'react';
import AgeCertification from './AgeCertification.jsx';

export default React.createClass({
  getGenres: function() {
    return this.props.genres.join(', ');
  },

  render: function() {
    return (
      <ul className="movie-details">
        <li><span className="detail-label">RELEASED </span>{this.props.releaseDate}</li>
        <li><span className="detail-label">RUNTIME </span>{this.props.runTime} minutes</li>
        <li><span className="detail-label">CERTIFICATION </span><AgeCertification certification={this.props.certification} /></li>
        <li><span className="detail-label">GENRES </span>{this.getGenres()}</li>
      </ul>
    );
  }
});
