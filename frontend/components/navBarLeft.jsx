var React = require('react');
var History = require('react-router').History;

var NavBarLeft = React.createClass({
  mixins: [History],

  handleHomeClick: function(e) {
    e.preventDefault();
    if (this.props.user.first_name) {
      this.history.pushState(null, "/home");
    } else {
      this.history.pushState(null, "/");
    }
  },

  render: function() {
    var display;
    if (this.props.user.first_name) {
      display = (
        <div className="navbar-search">
          <form className="row">
            <input
              type="text"
              className="search"
              placeholder='Search FriendFinity'
              required
              autoFocus/>
            <button
               className="auth-button"
               type="submit">
               Search
            </button>
          </form>
        </div>
      )
    } else {
      display = (
        <p1 className="logo-text" onClick={this.handleHomeClick}>riendFinity</p1>
      )
    }
    return (
      <div className="navbar-left">
        <li className="absolute-logo">
          <img id="friend-logo" src="/assets/logo.png" onClick={this.handleHomeClick}></img>
        </li>
        {display}
      </div>
    );
  }

});

module.exports = NavBarLeft;
