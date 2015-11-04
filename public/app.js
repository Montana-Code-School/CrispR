// RecipeBox
//   RecipeSearchBar
//   RecipeList = Returned Recipes from original search
//     Recipe = The single recipe you want to get ingredients from
//       RecipeIngredients = What is shown when interaction happens to Recipe

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
                      <input type="text" ref= "foodItem" className="" id="userText" placeholder="        Ingredients"/>
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
      <div>
        <div className="col-md-12 text-center">
            <ul>
             {recipeData} 
            </ul>
        </div>
      </div>
      );
    }
  })

var Recipe  = React.createClass({
    getInitialState: function() {
      return {liked: false, ingredientsData: []};
    },

    handleClick: function(event) {
      this.setState({liked: !this.state.liked});
    },

    loadIngredientsFromServer: function(rId){
      var url2="/api/ingredients/"
      var rId = rId
        $.ajax({
          url: url2 + rId,
          dataType: 'json',
          cache: false,
          success:function(ingredientsData){
            console.log("ingredient success")
            this.setState({ingredientsData:ingredientsData});
          }.bind(this),
          error: function(xhr, status, err){
            console.log("broken " + this.props.url)
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });

    },
    
    render: function() {
      // var self = this;
      var text = this.state.liked ? 'Hide Ingredients' : 'Show Ingredients';
      return (
        <div>
          <div className="col-md-6 col-sx-10 col-sm-8 col-lg-4 col-xs-offset-1" id="panel-spacing">
            <div className="panel panel-default" id="panel">
              <div className="panel-heading" id="panel-heading">
                <h6 className="panel-title"><a href={this.props.r.source_url}> {this.props.r.title} </a></h6>
              </div>
              <div className="panel-body">
                <li> <img src={this.props.r.image_url} id="thumbnail"/> </li>
              </div>
              <div>
                <button onClick= {this.loadIngredientsFromServer.bind(this, this.props.r.recipe_id)}
                  type="button" className="btn btn-default">{text}</button>
                <button onClick= {this.handleClick} type="button" className="btn btn-default">{text}</button>
              </div>
            </div>
          </div>
          <RecipeIngredients ingredientsData={this.state.ingredientsData} ingredientsDisplay={this.state.liked}/>
        </div>
      );
    }
})

var RecipeIngredients  = React.createClass({

    render: function() {
      var ingredientList = this.props.ingredientsData; 
         return !this.props.ingredientsDisplay ? <div/> : (
          <div>
            {ingredientList}
          </div>
        );
    }
});

React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));