var React = require('react');
var History = require('react-router').History;


var NavBarLeft = React.createClass({
  mixins: [History],

  handleHomeClick: function(e) {
    e.preventDefault();

    this.history.pushState(null, "/#");
  },

  render: function() {

    return (
      <div className="navbar-left">
        <li className="absolute-logo">
          <img id="friend-logo" src="/assets/logo.png" onClick={this.handleHomeClick}></img>
        </li>
        <p1 className="logo-text" onClick={this.handleHomeClick}>riendFinity</p1>
      </div>
    );
  }

});

module.exports = NavBarLeft;
