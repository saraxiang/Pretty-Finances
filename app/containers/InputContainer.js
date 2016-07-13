var React = require('react');
var Input = require("../components/Input");

var InputContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <form className="col s12">
          <Input />
        </form>
      </div>
    )
  }
});

module.exports = InputContainer;