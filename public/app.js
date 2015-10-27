var RecipeList = React.createClass({
  render: function() {
    var recipeData = this.props.data.map(function(r){
    })
    return (
      <div>
          <h1> List of Recipes</h1>
            <ul>
                {recipeData} 
            </ul>
      </div>
      );
  }
})


var RecipeBox = React.createClass({
  
  getInitialState: function (){
    return {data: []}
  },

    loadRecipesFromServer: function(){
      $.ajax({
        url: this.props.url,
        dataTYpe: 'json',
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
                  <ul>
                    <RecipeList data={this.state.data}/>
                  </ul>
              </div>
            );
        }
    });

    React.render(<RecipeBox url="/api/recipes/"/>, document.getElementById('results'));






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
   







