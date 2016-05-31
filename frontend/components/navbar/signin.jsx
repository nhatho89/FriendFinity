var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../../actions/sessionAction.js');
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
    var email = "joey@friends.com";
    var password = "qweasd";

    SessionActions.logIn({
      email: 'joey@friends.com',
      password: 'qweasd'
    });
  },

  render: function() {
    return(
      <form
         className='form-auth'
         autoComplete="off"
         onSubmit={this.handleSubmit}>
         <div className="row">
           <div className="auth-input">
             <input
               type="text"
               className="login-control"
               valueLink={this.linkState("email")}
               placeholder='Email'
               required
               autoFocus/>
           </div>
           <div className="auth-input">
             <input
               type="password"
               id="inputPassword"
               className="login-control"
               valueLink={this.linkState("password")}
               placeholder='Password'
               required
               />
           </div>
         </div>
        <div className="submit-button">
          <button
            className="auth-button demo-auth-button pointer"
            type="button"
            style={{float: "right"}}
            onClick={this.fillOutLogin}>
            Demo Account
          </button>
        </div>
        <button
           className="auth-button sub-auth-button pointer"
           type="submit">
           Sign In
        </button>
      </form>
    );
  }
});

module.exports = LoginModalForm;
