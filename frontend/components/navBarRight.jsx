var React = require('react');
var SessionActions = require('../actions/sessionAction');
var History = require('react-router').History;
var Signin = require('./signin');


var NavBarRight = React.createClass({
  mixins: [History],

  handleSignOut: function() {
    SessionActions.logOut();
    this.history.push({pathname: "/"});
  },

  redirectUserProfile: function() {
    this.history.push({pathname: "users/" + this.props.user.id});
  },

  redirectHostProfile: function() {
    this.history.push({pathname: "host/"})
  },

  // <a onClick={this.redirectHostProfile}>My Rooms</a>
  render: function() {

    // <img className="profile-pic" src={this.props.user.profile_pic}></img>
    var display;
    if (this.props.user.first_name) {
      display = (
        <div className="signInUp">
          <div>
            <p>{this.props.user.first_name}</p>
            <p onClick={this.handleSignOut}>Sign out</p>
          </div>

        </div>
      )
    } else {
      display = (
        <div className="signed-out-container">
          <Signin/>
        </div>
      )
    }
    return (
      <div className="navbar-right">
        {display}
      </div>
    );
  }

});

module.exports = NavBarRight;
