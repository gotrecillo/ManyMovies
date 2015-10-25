import React from 'react';
import MovieSocialStats from './MovieSocialStats.jsx';
import MovieDetails from './MovieDetails.jsx';
import CollectionManager from './CollectionManager.jsx';
import Comment from './Comment.jsx';
import CommentWriter from './CommentWriter.jsx';

export default React.createClass({
  getDefaultProps: function() {
    let src = require('../../static/images/minions.jpg');
    return {
      title: 'Minions',
      poster: src,
      collected: 6666,
      votes: 2934,
      score: 74,
      releaseDate: '01/25/2015',
      runTime: 91,
      certification: 'PG',
      genres: ['Adventure', 'Animation', 'Comedy', 'Family'],
      sinopsis: 'Minions Stuart, Kevin, and Bob, are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world'
    };
  },

  getYear: function() {
    return this.props.releaseDate.slice(-4);
  },

  render: function() {
    return (
      <div className='movie-wrapper'>
        <div className='movie-header'>
          <img className='movie-portrait' src={this.props.poster} alt='caca'/>
          <h3 className='movie-title'>{this.props.title} <span className='stat-label'>{this.getYear()}</span></h3>
          <MovieSocialStats collected={this.props.collected} votes={this.props.votes} score={this.props.score} />
        </div>
        <MovieDetails releaseDate={this.props.releaseDate} runTime={this.props.runTime} certification={this.props.certification} genres={this.props.genres} />
        <p className='movie-description'>{this.props.sinopsis}</p>
        <CollectionManager />
        <CommentWriter />
        <Comment author="Sergio Panadero" date="10/10/2015" text="An awesome movie for all the family. We all enjoyed it a lot" />
        <Comment author="Gotrecillo" date="11/11/2015" text="I didnt like it as much as the despicable me movies" />
      </div>
    );
  }
});

