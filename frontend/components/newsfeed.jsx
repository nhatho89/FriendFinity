var React = require('react');
var StatusUpdate = require('./statusUpdate');
var Feed = require('./feed');

var Newsfeed = React.createClass({

  render: function() {
    return (
      <div>
        Newsfeed
        <StatusUpdate/>
        <Feed/>
      </div>
    );
  }

});

module.exports = Newsfeed;
