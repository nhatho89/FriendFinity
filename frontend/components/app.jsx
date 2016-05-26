var React = require('react');
var Navbar = require('./navbar');
var SessionStore = require('../stores/sessionStore');
var SessionActions = require('../actions/sessionAction');

var App = React.createClass({
  
  render: function() {
    return (
      <div className="app">
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
