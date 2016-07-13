var React = require('react');

var Input = React.createClass({
  render: function () {
  	return (
		<div className="input-field col s4">
		  <input id="last_name" type="text" />
		  <label htmlFor="last_name">{this.props.label}</label>
		</div>
		)
	}
});

module.exports = Input;

