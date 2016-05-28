var React = require('react');
var LeftNavigation = require('./leftNavigation');
var Newsfeed = require('./newsfeed');
var SessionStore = require('../stores/sessionStore');
var PeopleNavigation = require('./peopleNavigation');


var Homepage = React.createClass({
  getInitialState: function() {
    return ({
      user: SessionStore.currentUser()
    })
  },

  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this.userChange);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  userChange: function() {
    this.setState({ user: SessionStore.currentUser() });
  },

  render: function() {
    return (
      <div className="home-page-container row">
        <div className="left-navigation">
          <LeftNavigation user={this.state.user}/>
        </div>
        <div className="newsfeed">
          <Newsfeed user={this.state.user}/>
        </div>
        <div>
          <PeopleNavigation/>
        </div>
      </div>
    );
  }

});

module.exports = Homepage;
