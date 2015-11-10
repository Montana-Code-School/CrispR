
var App = React.createClass({
	getInitialState: function() {
		return {show: false};
	},

	clickHandler: function() {
		this.state.show
	},

	    render: function() {
	    	var data = [];
	        return (
	          <div>
	            <TestTwo/>
	            <p>this is a sentence</p>
	          </div>
	        );
    }
})


var TestTwo = React.createClass({
    render: function() {
        return (
          <div>
              <ul>
              	{this.testUno}
                <h1>Test Two</h1>
                <button type="button" className="btn btn-default">button</button>
              </ul>
          </div>
        );
    }
});

React.render(<App/>, document.getElementById('firstRow'));

var TestThree = React.createClass({
    render: function() {
        return (
          <div>
              <ul>
                <h1>Test Three</h1>
              </ul>
          </div>
        );
    }
});

React.render(<TestThree/>, document.getElementById('thirdRow'));

