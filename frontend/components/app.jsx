var React = require('react');
var Navbar = require('./navbar');

var App = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function() {

  },

  userChange: function() {

  },

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
