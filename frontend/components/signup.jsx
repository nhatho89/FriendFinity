var React = require('react');

var SignUp = React.createClass({
  handleSubmit: function() {

  },

  render: function() {
    return (
      <div className="signup-container col">

        <form className='form-auth' onSubmit={this.handleSubmit}>
        <div className="auth-input row">
            <input
                type="text"
                id="firstname"
                className="auth-control"
                placeholder='First name'
                required
                autoFocus
            />
            <input
                type="text"
                id="lastname"
                className="auth-control"
                placeholder='Last name'
                required
                autoFocus
            />
        </div>

        <div className="auth-input">
            <input
              type="email"
              id="email"
              className="auth-control"
              placeholder='Email'
              required
              />
        </div>

        <div className="auth-input">
            <input
              type="password"
              id="password"
              className="auth-control"
              placeholder='Password'
              required
              />

            <input
              type="password"
              id="passwordConfirmation"
              className="auth-control"
              placeholder='Confirm Password'
              required
              />
        </div>
      

        <div className="checkbox" id="signUpCheckbox">
          <div className="remember-me-container">
            <label className="remember-me">
              <input type="checkbox" value="agreement" required></input>
              I agree to the terms and conditions.
            </label>
          </div>
        </div>
        <button
          className="auth-button"
          type="submit">
          Sign Up
        </button>
      </form>
      </div>
    );
  }

});

module.exports = SignUp;
