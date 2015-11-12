var VendorList = React.createClass({

  render: function() {
    var d = this.props.data

    var addVendor = this.props.data.map(function(vendor) {
      return (
        <div>
          <div className="container-fluid" id="vendorTable">
            <div className="media col-md-3 col-sm-4 col-xs-6">
              <a className="thumbnail" id="farmStand">
                <img src={vendor.img}/>
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

var VendorBox = React.createClass({
   
    getInitialState: function(){
        return{data: []};
    },
    
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