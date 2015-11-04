var VendorList = React.createClass({
 
   render: function() {
     var d = this.props.data
     console.log(d);
       var addVendor = this.props.data.map(function(vendor){
           return (
                   <div>
                       <div className="col-md-4" id="panel-vendor">
                       <div className="panel panel-default">
                           <div className="panel-heading" id="vendor-heading">
                               <h6 className="panel-title">{vendor.vendorName}</h6>
                               <p className="panel-title">{vendor.contactFirstName}  {vendor.contactLastName}</p>
                               <p className="panel-title">{vendor.address}</p>
                               <ul><strong>{vendor.produce}</strong>
                                   <li>{vendor.veggies} </li>
                                   <li>{vendor.fruits} </li>
                                   <li>{vendor.meats} </li>
                                   <li>{vendor.other} </li>
                               </ul>
                           </div>
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


React.render(<VendorBox url="/api/vendors/"/>, document.getElementById("vendorTable"));