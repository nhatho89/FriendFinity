var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../actions/sessionAction.js');
var History = require('react-router').History;

var LoginModalForm = React.createClass({
  mixins: [History],
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      email: "",
      password: ""
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    // this.props.closeModal();
    SessionActions.logIn({
      email: this.state.email,
      password: this.state.password
    });

  },

  fillOutLogin: function() {
    var email = "test@gmail.com";
    var password = "qweasd";

    SessionActions.logIn({
      email: 'test@gmail.com',
      password: 'qweasd'
    });
    
    // this.props.closeModal();

  },

  // <img className="email-icon" src="/assets/icons/social.png"></img>
  render: function() {
    return(
      <form
         className='form-auth'
         autoComplete="off"
         onSubmit={this.handleSubmit}>
        <div className="auth-input">
          <div className="email-icon-container">
            <i className="fa fa-user fa-lg" aria-hidden="true"></i>
          </div>
            <input
                type="text"
                id="email"
                className="auth-control"
                valueLink={this.linkState("email")}
                placeholder='Username'
                required
                autoFocus
            />
        </div>
        <div className="auth-input">
          <div className="email-icon-container">
            <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
          </div>
          <input
            type="password"
            id="inputPassword"
            className="auth-control"
            valueLink={this.linkState("password")}
            placeholder='Password'
            required
            />
        </div>
        <div className="checkbox">
          <div className="remember-me-container">

            <label className="remember-me">
              <input type="checkbox" value="remember-me"></input>
              Remember me
            </label>
          </div>
          <button
            className="demo-button"
            type="button"
            style={{float: "right"}}
            onClick={this.fillOutLogin}>
            Demo Account
          </button>
        </div>
        <button
           className="auth-button"
           type="submit">
           Sign In
        </button>
      </form>
    );
  }
});

module.exports = LoginModalForm;
