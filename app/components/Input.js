var React = require('react');

var Input = React.createClass({
	getInitialState: function() {
    	//TODO: import data from database after login
        return {inputs: [{category: "", amount: "", date: ""}], indexes: [0], counter: 1, selected: [false]};
    },
    addInputField: function(e) {
        e.preventDefault();

        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        var selected = this.state.selected;
        inputs.push({category: "", amount: "", date: ""}); //add empty new entry
        indexes.push(this.state.counter);	//add corresponding index
        selected.push(false);
        this.setState({inputs: inputs, indexes: indexes, counter: ++this.state.counter, selected: selected}); //increment index
    },
    removeInputFields: function() {
    	//a unique array Indexes is maintained alongside Inputs to guarantee that
		//each input item has unique key, even after an input is removed and everything is
		//rerendered (which would shuffle the indexes associated with each index)
		//Selected is also maintained alongside Inputs to keep track of items that are
		//selected (via checkbox)
        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        var selected = this.state.selected;
        function removeSelected (item, index) {
			return !selected[index]
		}
        inputs = inputs.filter(removeSelected);
        indexes = indexes.filter(removeSelected);
        selected = selected.filter(removeSelected);
        this.setState({inputs: inputs, indexes: indexes, selected: selected});
    },
    toggleSelect: function(i) {
        var selected = this.state.selected;
        selected[i] = !selected[i];
        this.setState({selected: selected});
    },
    handleCategoryChange: function(i, e) {
    	var inputs = this.state.inputs;
    	input = inputs[i];
   		input.category = e.target.value;
   		inputs[i] = input;

   		this.setState({inputs: inputs});
  	},
  	handleAmountChange: function(i, e) {
  		var inputs = this.state.inputs;    	
    	input = inputs[i];
    	input.amount = e.target.value;
    	inputs[i] = input;

    	this.setState({inputs: inputs});
  	},
  	handleDateChange: function(i, e) {
    	var inputs = this.state.inputs;
    	input = inputs[i];
    	input.date = e.target.value;
    	inputs[i] = input;

    	this.setState({inputs: inputs});
  	},
  	handleSubmit: function() {
	    e.preventDefault(); //prevents browser's default action of submitting the form
	    //TODO: trim all inputted values?
	    // var category = this.state.cateogry.trim();
	    if (!category || !amount || !date) {
	      //TODO: prompt user to fill out all fields
	      return;
	    }
	    //TODO: send request to the server
	    //TODO: update calendar
	    // alert("handleSubmit was called");
	},
    render: function (){
        var inputs = this.state.inputs;
        var indexes = this.state.indexes;
        var selected = this.state.selected;
        var allInputs = inputs.map(function (input, i) {        			   
                       var categoryId = "category-" + indexes[i];
                       var amountId = "amount-" + indexes[i];
                       var dateId = "date-" + indexes[i];
                       var itemId = "item-" + indexes[i];
                       return (
                       		<div className="row" key={indexes[i]}>
	                           	<div className="input-field col s3">
								  <input 
								  	id={categoryId} 
								  	type="text"
								  	value={inputs[i].category}
					      			onChange={this.handleCategoryChange.bind(this, i)} />
								  <label htmlFor={categoryId}>Category</label>
								</div>
								<div className="input-field col s3">
								  <input 
								  	id={amountId} 
								  	type="text"
								  	value={inputs[i].amount}
					      			onChange={this.handleAmountChange.bind(this, i)} />
								  <label htmlFor={amountId}>Amount Spent</label>
								</div>
								<div className="input-field col s3">
								  <input 
								  	id={dateId} 
								  	type="text"
								  	value={inputs[i].date}
					      			onChange={this.handleDateChange.bind(this, i)} />
								  <label htmlFor={dateId}>Date</label>
								</div>
								<p className="input-field col s3">
							      <input 
							      	id={itemId} 
							      	type="checkbox" 
							      	value={selected[i]}
					      			onChange={this.toggleSelect.bind(this, i)} />
							      <label htmlFor={itemId}></label>
							    </p>
							</div>
                       	)
                   	}.bind(this));
        return (
        	<div className="row">
        		{allInputs}
        		<a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addInputField}><i className="material-icons">add</i></a>
        		<a className="btn-floating btn-large waves-effect waves-light red" onClick={this.removeInputFields}><i className="material-icons">delete</i></a>
			</div>
        );
    }
});

module.exports = Input;

