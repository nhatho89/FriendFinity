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
  },

  handleFirstName: function(e) {
    e.preventDefault();

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
        <div className="signup-title-container">
          <div>
            <h4 className="signup-title">Sign Up</h4>
          </div>
          <div className="signup-subtitle-inner-container">
            <p1 className="signup-subtitle">It&#8217;s free and always will be</p1>
          </div>
        </div>
        <form className='form-auth' onSubmit={this.handleSubmit}>
        <div className="signup-input row">
            <input
                type="text"
                id="firstname"
                className="signup-control"
                onChange={this.handleFirstName}
                placeholder='First name'
                required
                autoFocus
            />
            <input
                type="text"
                id="lastname"
                className="signup-control"
                onChange={this.handleLastName}
                placeholder='Last name'
                required
                autoFocus
            />
        </div>

        <div className="signup-input">
            <input
              type="email"
              id="email"
              className="signup-control"
              onChange={this.handleEmail}
              placeholder='Email'
              required
              />
        </div>

        <div className="signup-input row">
            <input
              type="password"
              id="password"
              className="signup-control"
              onChange={this.handlePassword}
              placeholder='Password'
              required
              />

            <input
              type="password"
              id="passwordConfirmation"
              className="signup-control"
              onChange={this.handlePasswordConfirm}
              placeholder='Confirm Password'
              required
              />
        </div>

        <div className="signup-input row">
            <input
                type="text"
                id="month"
                className="signup-control date-control"
                placeholder='Month'
                onChange={this.handleMonth}
                required
                autoFocus
            />
            <input
                type="integer"
                id="day"
                className="signup-control date-control"
                onChange={this.handleDay}
                placeholder='Day'
                required
                autoFocus
            />
            <input
                type="integer"
                id="year"
                className="signup-control date-control"
                onChange={this.handleYear}
                placeholder='Year'
                required
                autoFocus
            />
        </div>

        <div className="row">
          <div className="signup-space">
            <input
              type="radio"
              value="male"
              onClick={this.handleGender}
              required
              >Male</input>

          </div>
          <div className="signup-space">
            <input
              type="radio"
              value="female"
              onClick={this.handleGender}
              required
              >Female</input>

          </div>
        </div>

        <div className="checkbox signup-space" id="signUpCheckbox">
          <div className="remember-me-container">
            <label className="remember-me">
              <input type="checkbox" value="agreement" required></input>
              I agree to the terms and conditions.
            </label>
          </div>
        </div>
        <div className="signup-button-container row space-between">
          <button
            className="signup-button"
            type="submit">
            Sign Up
          </button>
          <button
            className="signup-button"
            onClick={this.handleDemo}
            type="button">
            Demo
          </button>
        </div>
      </form>
      </div>
    );
  }

});

module.exports = SignUp;
