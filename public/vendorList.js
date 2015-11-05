var VendorList = React.createClass({
 
   render: function() {
     var d = this.props.data
     console.log(d);
       var addVendor = this.props.data.map(function(vendor) {
           return (
            <div>
            <div class="container" id="vendorTable">

            <div className="media col-md-3">
                <a className="thumbnail pull-left" id="farmStand">
                        <img src="images/farmStand.png" />
                    </a>
                </div>
                <div className="col-md-3" id="vendorDetails">
                      <h4>{vendor.vendorName}</h4>
                      <h5>Contact Name: {vendor.contactFirstName + ' ' + vendor.contactLastName}</h5>
                      <h5>City, State: {vendor.address}</h5>
                </div>
              
                 <div className="col-md-1" id="produceColumns">
                    <h4>Veggies</h4>
                      <p>{vendor.veggies.join(' ')}</p>
                  </div>
                  <div className="col-md-1" id="produceColumns">
                    <h4>Fruits</h4> 
                      <p>{vendor.fruits.join(' ')}</p>
                  </div>
                  <div className="col-md-1" id="produceColumns">
                    <h4>Meats</h4>
                      <p>{vendor.meats.join(' ')}</p>   
                  </div>
                  <div className="col-md-1" id="produceColumns">
                    <h4>Other</h4>
                      <p>{vendor.other.join(' ')}</p> 
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