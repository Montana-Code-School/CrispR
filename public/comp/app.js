var RecipeBox = React.createClass({

  getInitialState: function (){
   return {data: [], vendors: []}
  },

    loadRecipesFromServer: function(recipe) {

      var recipe = recipe.newFoodItem;

      $.ajax({
        url: this.props.url + recipe,
        dataType: 'json',
        cache: false,

        success:function(data){
          console.log("recipe success")
          this.setState({data:data});
        }.bind(this),

        error: function(xhr, status, err){
           console.log("broken" + this.props.url)
           console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },

    loadVendorsFromServer: function(recipe) {

      var food = recipe.newFoodItem;

      $.ajax({
        url:"/api/vendors/item/" + food,
        dataType:"json",
        cache: false, 

        success: function(vendorData){
        this.setState({vendors: vendorData});
        }.bind(this),

        error: function(xhr, status, err){
            console.log("broken url is " + this.props.url);
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
 
 

  render: function() {
    return (
      <div>
        <RecipeSearchBar onRecipeSubmit={this.loadRecipesFromServer} 
          onVendorSubmit={this.loadVendorsFromServer}/>
        <RecipeList data={this.state.data}/>
        <VendorList data={this.state.vendors}/>    
      </div>
    );
  }
});

var RecipeSearchBar = React.createClass ({
  handleSubmit: function(e) {

    e.preventDefault();
    var foodItem = React.findDOMNode(this.refs.foodItem).value.trim();
    var newFoodItem = foodItem.charAt(0).toUpperCase() + foodItem.slice(1);
    this.props.onRecipeSubmit({newFoodItem:newFoodItem});
    this.props.onVendorSubmit({newFoodItem:newFoodItem});

  },

  render: function() {
      return (
        <div>
            <form>
                <h1 id="topOfList">Find Your Food:</h1>
                <input type="text" ref= "foodItem" className="" id="userText" 
                  placeholder="      Ingredients"/>
              <div>
                <button onClick={ this.handleSubmit } id="searchButton" 
                  className="btn btn-success">Get Recipes</button>
              </div>
            </form>
        </div>
      );
  }
});

var RecipeList = React.createClass({

  render: function() {
    var recipeData = this.props.data.map(function(r) { 
      return ( 
        <div id="recipeWrapper">
          <Recipe r={r}/>
        </div>
      ); 
  })

    return (
    <div className="col-sm-5">
      {recipeData} 
    </div>
    );
  }
})

var VendorList = React.createClass({
  render: function(){
    var vendorListItems = this.props.data.map(function(item){
      return ( 
        <ul id="vendorItems">
          <img className="pull-right" id="vendorPic" src={item.img} />
            <h3 className="returnTitles">Vendor</h3>
            <h4> Vendor: {item.vendorName} </h4><br/>
              <li> Veggies: <br/> {item.veggies.join(', ')}</li><br/>
              <li> Fruits: <br/> {item.fruits.join(', ')} </li><br/>
              <li> Meat: <br/> {item.meats.join(', ')} </li><br/> 
              <li> Other: <br/>{item.other.join(', ')} </li><br/>
        </ul> 
      );
    });

    return (
      <div>
        <div className="col-sm-5 col-sm-offset-6" id="vengreed">
          {vendorListItems}
        </div>
      </div>
    )
  }
});


React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));