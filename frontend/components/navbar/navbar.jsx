var React = require('react');
var History = require('react-router').History;
var Signin = require('./signin');
var NavbarRight = require('./navBarRight');
var SessionStore = require('../../stores/sessionStore');
var NavBarLeft = require('./navBarLeft');
var NavBarRight = require('./navBarRight');
var SessionActions = require('../../actions/sessionAction');

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
    if (this.state.user.id) {
      this.history.push({pathname: "home/"});
    }
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  render: function() {

    return (
        <div id="navbar" className="row space-between">
          <NavBarLeft
            user={this.state.user}
            />
          <NavBarRight
            user={this.state.user}/>
        </div>
    );
  }

});

module.exports = Navbar;
