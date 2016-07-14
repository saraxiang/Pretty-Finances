var React = require('react');

var Input = React.createClass({
	getInitialState: function() {
    	//TODO: import data from database after login
        return {inputs: [{category: "", amount: "", date: ""}], indexes: [], counter: 0};
    },
    addInputField: function(e) {
        e.preventDefault();

        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        inputs.push({category: "", amount: "", date: ""}); //add empty new entry
        indexes.push(this.counter);	//add corresponding index
        this.setState({inputs: inputs, indexes: indexes, counter: ++this.counter}); //increment index
    },
    removeInputField: function(index) {
        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        inputs.splice(index, 1);
        indexes.splice(index, 1);
        this.setState({inputs: inputs, indexes: indexes, counter: counter});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        alert("handleSubmit was called");
        // What do I do here?
    },
    handleCategoryChange: function(e) {
    	this.setState({category: e.target.value});
    	// alert("handleCategoryChange was called");
  	},
  	handleAmountChange: function(e) {
    	this.setState({amount: e.target.value});
    	// alert("handleAmountChange was called");
  	},
  	handleDateChange: function(e) {
    	this.setState({date: e.target.value});
    	// alert("handleDateChange was called");
  	},
  	handleSubmit: function(e) {
	    e.preventDefault(); //prevents browser's default action of submitting the form
	    //TODO: trim all inputted values?
	    // var category = this.state.cateogry.trim();
	    if (!category || !amount || !date) {
	      //TODO: prompt user to fill out all fields
	      return;
	    }
	    //TODO: send request to the server
	    //TODO: update calendar
	    alert("handleSubmit was called");
	},
    render: function (){
        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        var allInputs = inputs.map(function (input, i) {
                       var categoryId = "category-" + indexes[i];
                       var amountId = "amount-" + indexes[i];
                       var dateId = "date-" + indexes[i];
                       return (
                       		<div className="row" key={i}>
	                           	<div className="input-field col s4">
								  <input 
								  	id={categoryId} 
								  	type="text"
								  	value={inputs[i].category}
					      			onChange={this.handleCategoryChange} />
								  <label htmlFor={categoryId}>Category</label>
								</div>
								<div className="input-field col s4">
								  <input 
								  	id={amountId} 
								  	type="text"
								  	value={inputs[i].amount}
					      			onChange={this.handleAmountChange} />
								  <label htmlFor={amountId}>Amount Spent</label>
								</div>
								<div className="input-field col s4">
								  <input 
								  	id={dateId} 
								  	type="text"
								  	value={inputs[i].date}
					      			onChange={this.handleDateChange} />
								  <label htmlFor={dateId}>Date</label>
								</div>
							</div>
                       	)
                   	});
        return (
        	<div className="row">
        		{allInputs}
        		<a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addInputField}><i className="material-icons">add</i></a>
			</div>
        );
    }
});

// var Temp-Input = React.createClass({
// 	getInitialState: function() {
//     	return {category: '', amount: '', date: ''};
//   	},
//   	handleCategoryChange: function(e) {
//     	this.setState({category: e.target.value});
//   	},
//   	handleAmountChange: function(e) {
//     	this.setState({amount: e.target.value});
//   	},
//   	handleDateChange: function(e) {
//     	this.setState({date: e.target.value});
//   	},
//   	handleSubmit: function(e) {
// 	    e.preventDefault(); //prevents browser's default action of submitting the form
// 	    var category = this.state.cateogry.trim();
// 	    var amount = this.state.amount.trim();
// 	    var date = this.state.date.trim();
// 	    if (!category || !amount || !date) {
// 	      //TODO: prompt user to fill out all fields
// 	      return;
// 	    }
// 	    //TODO: send request to the server
// 	    //TODO: update calendar
// 	},
// 	render: function () {
// 		//TODO: separate this "presentational" code from the logic above 
// 		//potentially have InputGroupContainer, InputItemContainer, and Input
// 	  	return (
// 	  		<div className="row">
// 				<div className="input-field col s4">
// 				  <input 
// 				  	id="category-0" 
// 				  	type="text"
// 				  	value={this.state.category}
// 	      			onChange={this.handleCategoryChange} />
// 				  <label htmlFor="category-0">Category</label>
// 				</div>
// 				<div className="input-field col s4">
// 				  <input 
// 				  	id="amount-0" 
// 				  	type="text" 
// 				  	value={this.state.amount}
// 	      			onChange={this.handleAmountChange}/>
// 				  <label htmlFor="amount-0">Amount Spent</label>
// 				</div>
// 				<div className="input-field col s4">
// 				  <input 
// 				  	id="date-0" 
// 				  	type="text" 
// 				  	value={this.state.date}
// 	      			onChange={this.handleDateChange}/>
// 				  <label htmlFor="date-0">Date</label>
// 				</div>
// 			</div>
// 		);
// 	}
// });
// TODO: add remove button
// <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><i className="fa fa-times"></i></span>
//TODO: implement add entry button
// <button className="btn btn-success btn-block" onClick={this.addInputField}>Add Input</button>
module.exports = Input;

