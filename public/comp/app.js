

var RecipeBox = React.createClass({

  getInitialState: function (){
    return {data: []}
  },

    loadRecipesFromServer: function(recipe){
      var recipe = recipe.foodItem;
      console.log(this.state),
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
        render: function() {
            return (
            <div>
                <RecipeSearchBar onRecipeSubmit={this.loadRecipesFromServer}/>
              
                  <RecipeList data={this.state.data}/>
             
                    
                  
            </div>
            );
        }
    }); 

var RecipeSearchBar = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var foodItem = React.findDOMNode(this.refs.foodItem).value.trim();
    this.props.onRecipeSubmit({foodItem:foodItem});
    console.log(foodItem)
  },
        render: function() {
            return (
              <div>
                  <form>
                      <h1 id="topOfList">Find Your Food:</h1>
                      <input type="text" ref= "foodItem" className="" id="userText" placeholder="       Ingredients"/>
                    <div>
                      <button onClick={ this.handleSubmit } id="searchButton" className="btn btn-success">Get Recipes</button>
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
        <div>
          <Recipe r={r}/>
        </div>
      ); 
    })

    return (
      <div className="col-sm-12">
        
            {recipeData} 
        
        
      </div>
      );
    }
  })




React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));