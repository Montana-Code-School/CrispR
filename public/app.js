

function fetchRecipes(){

  var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
  var urlKey = 'http://food2fork.com/api/search?key=';
  var searchField = '&q=shredded%20chicken';

  axios.get(urlKey + apiKey + searchField)
  .then(function (response) {
    console.log(response.data.recipes);
  })
  .catch(function (response) {
    console.log(response);
  });
}

    // var App = React.createClass({
    //   var recipes = this.data.recipes


    //     render: function() {
    //         return (
    //           <div>
    //               <ul>
    //                 { recipes }
    //               </ul>
    //           </div>
    //         );
    //     }
    // });

    // React.render(<App/>, document.getElementById('results'));






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
   







