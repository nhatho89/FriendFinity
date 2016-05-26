var React = require('react');
var History = require('react-router').History;
var Signin = require('./signin');
var NavbarRight = require('./navBarRight');
var SessionStore = require('../stores/sessionStore');
var Modal = require('react-modal');
var authModalStyle = require('./authModalStyle.jsx');
var NavBarLeft = require('./navBarLeft');
var NavBarRight = require('./navBarRight');
var SessionActions = require('../actions/sessionAction');

var Navbar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {
      user: SessionStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this.userChange);
    SessionActions.fetchSession();
  },

  userChange: function() {
    this.setState({ user: SessionStore.currentUser() });
  },

  render: function() {

    return (
      <div className="navbar">
        <div id="navbar" className="navbar-collapse collapse">

          <NavBarLeft/>

          <NavBarRight
            user={this.state.user}/>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
