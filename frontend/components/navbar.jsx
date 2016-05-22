var React = require('react');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],

  render: function() {
    return (
      <div className="navbar">
        <a className="logo" href="/#">Landing</a>
        <a className="logo" href="/#/home">Home</a>
      </div>
    );
  }

});

module.exports = Navbar;
