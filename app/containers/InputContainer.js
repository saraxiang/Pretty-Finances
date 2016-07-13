var React = require('react');
var Input = require("../components/Input");

var InputContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <form className="col s12">
        	<div className="row">
	          <Input label="Event"/>
	          <Input label="Amount Spent"/>
	          <Input label="Date"/>
	        </div>
        </form>
      </div>
    )
  }
});

module.exports = InputContainer;