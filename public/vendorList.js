var VendorList = React.createClass({
	
    render: function() {
        var addVendor = this.props.data.map(function(vendor){
            return (
              <div>

        <thead>
        <tr>
          <th>Vendor</th>
          <th>Contact First Name</th>
          <th>Contact Last Name</th>
          <th>Address</th>
          <th>Veggies</th>
          <th>Fruits</th>
          <th>Meats</th>
          <th>Other</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>vendor.vendorName</td>
          <td>vendor.contactFirstname</td>
          <td>vendor.contactLastName</td>
          <td>vendor.address</td>
          <td>vendor.veggies</td>
          <td>vendor.fruits</td>
          <td>vendor.meats</td>
          <td>vendor.other</td>

        </tr>
        
      </tbody>

              </div>
            )
        });
        
        return (
                <div>
                    {addVendor}
                </div>
            );
    }
});


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


React.render(<VendorBox url="/api/vendors/"/>, document.getElementById("vendorList"));
