var RecipeList = React.createClass({
  render: function() {
    var recipeData = this.props.data.map(function(r){
      console.log(r)
      return ( 
        <div>
          
          <h4> <a href={r.source_url}> {r.title} </a></h4>
          <li> <img src={r.image_url}/> </li>
          <li> Rank {r.social_rank} </li>
          
        </div>
      );

      
    })
    return (
      <div>
        <div className="col-md-12 text-center">
          
            <ul>
              <h1> List of Recipes</h1>
                {recipeData} 
            </ul>
        </div>
      </div>
      );
  }
})

var RecipeForm = React.createClass({
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
                    <h1 id="yum">Recipes</h1>
                      <input type="text" ref= "foodItem" className="" id="searchBar" placeholder="Ingredients"/>
                    <div>
                      <button onClick={ this.handleSubmit } id="searchButton" className="btn btn-success">Get Recipes</button>
                    </div>
                  </form>
              </div>
            );
        }
    });

var RecipeBox = React.createClass({

  getInitialState: function (){
    return {data: []}
  },

    loadRecipesFromServer: function(recipe){
      console.log(this.state),
      $.ajax({
        url: this.props.url + recipe.foodItem,
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
                <RecipeForm onRecipeSubmit={this.loadRecipesFromServer}/>
                <RecipeList data={this.state.data}/>
              </div>
            );
        }
    });

    React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('searchBar'));






   //   function getTasks() {
   //     $.get("https://localhost/TEST.TestService.svc/rest/Services?CostCentreNo=1&Filter=0",
   //       function(data){
   //         alert("Data Loaded: " + data);
   //       });
   // }

   //    function getTasks() {
   //     $.post("https://localhost/TEST.TestService.svc/rest/Services?CostCentreNo=1&Filter=0",
   //       function(data){
   //         alert("Data Loaded: " + data);
   //       });
   // }
   







