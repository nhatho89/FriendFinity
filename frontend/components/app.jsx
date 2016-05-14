var React = require('react');

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
        App
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
