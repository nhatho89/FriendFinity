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

  render: function() {
    // <div className="one">
    //   <img className="nav-profile-pic" src={this.props.user.profile_pic}></img>
    // </div>
    // <div className="two">
    //   <p>{this.props.user.first_name}</p>
    // </div>
    if (this.props.user.first_name) {
      return (
        <div className="navbar-right-signout col center">
          <div className="auth-button center pointer">
            <p onClick={this.handleSignOut}>Sign out</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar-right col center">
          <Signin/>
        </div>
      )
    }
  }

});

module.exports = NavBarRight;
