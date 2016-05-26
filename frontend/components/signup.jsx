var React = require('react');
var SessionActions = require('../actions/sessionAction');


var SignUp = React.createClass({

  getInitialState: function() {
    return ({
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      email: "",
      gender: "",
      day: 0,
      month: "",
      year: 0,
      errors: []
    });
  },

  handleSubmit: function() {
    this.errors = [];
    this.validateInputs()
    // this.props.closeModal();
    console.log(this.errors);
    if (this.errors.length > 0){
      this.setState({
        errors: this.errors
      });
    } else {
      SessionActions.signUp({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        day: this.state.day,
        month: this.state.month,
        year: this.state.year

      });

    }

  },

  validateInputs: function() {
    var password = this.state.password;
    var passwordConfirm = this.state.passwordConfirm
    debugger
    if (password.length < 6){
      this.errors.push("Password length too short (minimum: 6 characters)!");
    }
    if (password !== passwordConfirm) {
      this.errors.push("Password confirmation and Password must match!");
    }
    // if (this.state.email.) {
    //
    // }
  },

  handleDemo: function(e) {
    e.preventDefault();
    debugger
  },

  handleFirstName: function(e) {
    e.preventDefault();
    // debugger
    this.setState({
      firstName: e.target.value
    })
  },

  handleLastName: function(e) {
    e.preventDefault();
    this.setState({
      lastName: e.target.value
    })
  },

  handleEmail: function(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    })
  },

  handlePassword: function(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    })
  },

  handlePasswordConfirm: function(e) {
    e.preventDefault();
    this.setState({
      passwordConfirm: e.target.value
    })
  },

  handleGender: function(e) {
    e.preventDefault();
    // debugger
    this.setState({
      gender: e.target.value
    })
  },

  handleDay: function(e) {
    e.preventDefault();
    this.setState({
      day: e.target.value
    })
  },

  handleMonth: function(e) {
    e.preventDefault();
    this.setState({
      month: e.target.value
    })
  },

  handleYear: function(e) {
    e.preventDefault();
    this.setState({
      year: e.target.value
    })
  },

  render: function() {
    var alert = this.state.errors.map(function(error, idx){
        return (
          <div
            key={"error"+idx}
            className="alert alert-danger"
            role="alert">
            <strong>{error}</strong>
          </div>
        );
      });

    return (
      <div className="signup-container col">
        {alert}
        <form className='form-auth' onSubmit={this.handleSubmit}>
        <div className="auth-input row">
            <input
                type="text"
                id="firstname"
                className="auth-control"
                onChange={this.handleFirstName}
                placeholder='First name'
                required
                autoFocus
            />
            <input
                type="text"
                id="lastname"
                className="auth-control"
                onChange={this.handleLastName}
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
              onChange={this.handleEmail}
              placeholder='Email'
              required
              />
        </div>

        <div className="auth-input">
            <input
              type="password"
              id="password"
              className="auth-control"
              onChange={this.handlePassword}
              placeholder='Password'
              required
              />

            <input
              type="password"
              id="passwordConfirmation"
              className="auth-control"
              onChange={this.handlePasswordConfirm}
              placeholder='Confirm Password'
              required
              />
        </div>
        <div className="row">
          <div className="auth-input">
            <input
              type="radio"
              value="male"
              onClick={this.handleGender}
              required
              >Male</input>

          </div>
          <div className="auth-input">
            <input
              type="radio"
              value="female"
              onClick={this.handleGender}
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
                onChange={this.handleMonth}
                required
                autoFocus
            />
            <input
                type="integer"
                id="day"
                className="auth-control"
                onChange={this.handleDay}
                placeholder='day'
                required
                autoFocus
            />
            <input
                type="integer"
                id="year"
                className="auth-control"
                onChange={this.handleYear}
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
