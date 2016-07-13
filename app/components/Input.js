var React = require('react');

var Input = React.createClass({
  render: function () {
  	return (
		<div className="row">
			<div className="input-field col s12">
			  <input id="last_name" type="text" />
			  <label htmlFor="last_name">Input Some Data Here :)</label>
			</div>
		</div>
		)
	}
});

module.exports = Input;

