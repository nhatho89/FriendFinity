var React = require('react');
var PeopleYouMayKnow = require('./peopleYouMayKnow');
var Friends = require('./friends');

var PeopleNavigation = React.createClass({

  render: function() {
    return (
      <div className="people-navigation">
        <Friends/>
        <PeopleYouMayKnow/>
      </div>
    );
  }

});

module.exports = PeopleNavigation;
