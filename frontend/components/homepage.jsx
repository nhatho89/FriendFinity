var React = require('react');
var LeftNavigation = require('./leftNavigation');
var Newsfeed = require('./newsfeed');

var Homepage = React.createClass({

  render: function() {
    return (
      <div className="home-page-container row">
        <div className="left-navigation">
          <LeftNavigation/>
        </div>
        <div className="newsfeed">
          <Newsfeed/>
        </div>
      </div>
    );
  }

});

module.exports = Homepage;
