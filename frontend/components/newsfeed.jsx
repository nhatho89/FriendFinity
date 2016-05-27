var React = require('react');
var StatusUpdate = require('./statusUpdate');
var Feed = require('./feed');


var Newsfeed = React.createClass({

  render: function() {
    return (
      <div className="newsfeed-container">
        <StatusUpdate user={this.props.user}/>
        <Feed/>
      </div>
    );
  }

});

module.exports = Newsfeed;
