var Recipe  = React.createClass ({

  getInitialState: function() {
    return {liked: false, ingredientsData: []};
  },

    loadIngredientsFromServer: function(rId) {

      var url2="/api/ingredients/";
      var rId = rId;

        $.ajax({
          url: url2 + rId,
          dataType: 'json',
          cache: false,

          success:function(ingredientsData){
            console.log("ingredient success");
            this.setState({ingredientsData:ingredientsData});
            this.setState({liked: !this.state.liked});
          }.bind(this),

          error: function(xhr, status, err){
            console.log("broken " + this.props.url)
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    
  render: function() {
    var text = this.state.liked ? 'Hide Ingredients' : 'Show Ingredients';

    return (
      <div>
        <h3><a href={this.props.r.source_url}> {this.props.r.title} </a></h3>
          <li> <img src={this.props.r.image_url} id="thumbnail"/> </li>
            <div>
              <button id="ingredientsButton" onClick= {this.loadIngredientsFromServer.bind(this, this.props.r.recipe_id)}
                type="button" className="btn btn-default">{text}</button>
            </div>
        <RecipeIngredients ingredientsData={this.state.ingredientsData} ingredientsDisplay={this.state.liked}/>
      </div>
    );
  }
})

var RecipeIngredients  = React.createClass({

  render: function() {
    var ingredientList = this.props.ingredientsData.map(function(item) {
      return <p> {item} </p>
    });

    return !this.props.ingredientsDisplay ? <div/> : (
      <div className="col-sm-12"id="ingreed">
        <h3 className="returnTitles">Ingredients You Need</h3>
          {ingredientList}
      </div>
    );
  }
});