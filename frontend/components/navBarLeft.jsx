var React = require('react');
var History = require('react-router').History;


var NavBarLeft = React.createClass({
  mixins: [History],

  // scrollToView: function() {
  //   var element = document.getElementById("explore-container");
  //   setTimeout(function(){
  //   $('html, body').animate({
  //     scrollTop: element.offsetTop}, "slow");
  //   }, 251);
  // },

  scrollToElement: function(e) {
    var element;
    if (e.target.id === "explore-dropdown-text") {
      element = document.getElementById("explore-container");
    } else if (e.target.id === "customers-dropdown-text") {
      element = document.getElementById("media-container");
    } else if (e.target.id === "connect-dropdown-text") {
      element = document.getElementById("bottom-container");
    } else if (e.target.id === "lairshare-logo-container") {
      element = document.getElementById("landing-page");
    }

    if (element) {
      setTimeout(function(){
				$('html, body').animate({
					scrollTop: element.offsetTop - 30}, "slow");
			}, 251);
    } else {
      // this.history.push({pathname: "/#"});
      this.history.pushState(null, "/#");
      // this.scrollToView();
    }
  },


  // <a className="logo" href="/#/hostform">Be A Host</a>
  render: function() {

    return (
      <div className="navbar-left">
        
      </div>
    );
  }

});

module.exports = NavBarLeft;
