 // var VegList = React.createClass({
 //    render: function() {

 // var addVeg = this.props.map(function(veg) {
 //        for (var i = 0; i < veg.veggies; i++) {
 //          addVeg.push(<span className="badge badge-success">{veg.veggies}</span>);
 //        });
 //        return (
 //          <div>
 //          {addVeg}
 //          </div>
 //          );
 //        }
 //      }
 //    });


var VendorList = React.createClass({

   render: function() {
     var d = this.props.data
     console.log(d);

       var addVendor = this.props.data.map(function(vendor) {
          
           return (
            <div>
            <div class="container-fluid" id="vendorTable">

            <div className="media col-md-3 col-sm-4 col-xs-6">
                <a className="thumbnail" id="farmStand">
                        <img src="images/farmFork.png" />
                    </a>
                </div>
                <div className="col-xs-4 col-md-3 col-sm-8" id="vendorDetails">
                      <h4 id="vendorName">{vendor.vendorName}</h4>
                      <h5>Contact: {vendor.contactFirstName + ' ' + vendor.contactLastName}</h5>
                      <h5>City, State: {vendor.address}</h5>
                </div>
              
                 <div className="col-md-1 col-sm-1 col-xs-3 produceColumns">
                    <h4 id="vendorName">Veggies</h4>
                      <p>{vendor.veggies.join(' ')}</p>
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-3 produceColumns">
                    <h4 id="vendorName">Fruits</h4> 
                      <p>{vendor.fruits.join(' ')}</p>
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-3 produceColumns">
                    <h4 id="vendorName">Meats</h4>
                      <p>{vendor.meats.join(' ')}</p>   
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-3 produceColumns">
                    <h4 id="vendorName">Other</h4>
                      <p id="other">{vendor.other.join(' ')}</p> 
                  </div>
           
            </div>
            </div>

           )
       });
           
       return (
         <div id="vendorList">
               
               {addVendor}
        
               </div>
           );
   }
});
//////////////
var VendorBox = React.createClass({
    //Set initial state-----------------
    getInitialState: function(){
        return{data: []};
    },
    //Fetch data from our server--------------
    loadVendorsFromServer: function(){
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache: false,
            success: function(data){
                console.log("load vendor success")
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log("broken url is " + this.props.url);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    //Mount components------------------
    componentDidMount: function(){
        this.loadVendorsFromServer();
    },
    render: function() {
        return (
            <div>
                <VendorList data={this.state.data}/>
            </div>
        );
    }
});
React.render(<VendorBox url="/api/vendors/"/>, document.getElementById("vendorInfo"));