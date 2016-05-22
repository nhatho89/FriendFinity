var React = require('react');

var SignUp = React.createClass({
  handleSubmit: function() {

  },

  handleDemo: function() {

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
        <div className="row">
          <div className="auth-input">
            <input
              type="radio"
              value="male"
              required
              >Male</input>

          </div>
          <div className="auth-input">
            <input
              type="radio"
              value="female"
              required
              >Female</input>

          </div>
        </div>

        <div className="auth-input row">
            <input
                type="text"
                id="month"
                className="auth-control"
                placeholder='month'
                required
                autoFocus
            />
            <input
                type="text"
                id="day"
                className="auth-control"
                placeholder='day'
                required
                autoFocus
            />
            <input
                type="text"
                id="year"
                className="auth-control"
                placeholder='year'
                required
                autoFocus
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
        <button
          className="demo-button"
          onClick={this.handleDemo}
          type="button">
          Demo
        </button>
      </form>
      </div>
    );
  }

});

module.exports = SignUp;
