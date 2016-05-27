var React = require('react');
var SignUp = require('./signup');
var SessionStore = require('../stores/sessionStore');
var History = require('react-router').History;


var LandingPage = React.createClass({
  mixins: History,

  render: function() {
    return (
      <div className="landing-page-container row">
        <div className="left-page col">
          <img className="landing-page-background-photo" src="/assets/background.png"></img>
          <div className="landing-slogan">
            <p className="slogan">
              Forge friendships that will last to infinity and beyond!
            </p>
          </div>
          <div>
            <p>
              <strong>Share photos</strong> from friends!
            </p>
            <p>
              <strong>Share whats new</strong> in your life on your timeline!
            </p>
            <p>
              <strong>Keep up with friends </strong> using your news feed!
            </p>
          </div>
        </div>

        <div className="right-page">
          <SignUp/>
        </div>
      </div>
    );
  }

});

module.exports = LandingPage;
