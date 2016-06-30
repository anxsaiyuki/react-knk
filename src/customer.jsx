var React = require("react");
var ReactDOM = require("react-dom")

require("./css/customerContent.css");

var TopBarBlock=require("bundle?lazy!./components/topBar.jsx");
var MenuBlock=require("bundle?lazy!./components/menu.jsx");

TopBarBlock(function(TopBar) {
    ReactDOM.render(<TopBar />, document.getElementById('top_bar'));
});
    
MenuBlock(function(TopBar) {
    ReactDOM.render(<TopBar />, document.getElementById('menu'));
});

var Application = React.createClass({
  getInitialState: function() {
      return {
          
      };
  },
  componentWillMount: function() {
      
  },
  componentDidMount: function() {
      $('#all-result').dataTable();
  },
  showCreateCustomer: function() {
        var options = {hashTracking: false};
        var inst = $('.messageModal').remodal(options);
        inst.open();
  },
  render: function() {
    return (
    <div>
       <div id="messageModalWrapper">
            <div className="remodal messageModal" data-popup-wrapper="messageModalWrapper" data-remodal-id="message-modal">
              <button data-remodal-action="close" className="remodal-close"></button>
                <div className="popup-title">Create Customer</div>
                <div className="modal-border col-xs-12">
                    <div className="form-horizontal">
                        <div className="form-group">
                            <label for="company" className="col-sm-2 control-label">Company</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="company" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="phone" className="col-sm-2 control-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone" placeholder="Phone"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="address" className="col-sm-2 control-label">Address</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="address" placeholder="Address"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="address2" className="col-sm-2 control-label">Address2</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="address2" placeholder="Address2"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="address3" className="col-sm-2 control-label">Address3</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="address3" placeholder="Address3"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="city" className="col-sm-2 control-label">City</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="city" placeholder="City"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="zipcode" className="col-sm-2 control-label">Zip</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="zipcode" placeholder="Zip"/>
                            </div>
                        </div>
                    </div> 
                    <div className="row row-content">
                        <button className="create-message btn btn-primary col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">Create</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="title">Customer</div>
        <div className="button-content col-md-12">
            <button type="button" className="create-customer-btn btn btn-primary" onClick={this.showCreateCustomer}>Create Customer</button>
        </div>
        <div className="col-md-12 search-box">
            <div className="col-md-12 search-content">
                <div className="row search-row">
                    <div className="id-search col-md-2">
                        <div className="search-label">ID</div>
                        <input className="id-input form-control" type="text" name="id"/>
                    </div>
                    <div className="company-search col-md-2">
                        <div className="search-label">Company</div>
                        <input className="company-input form-control" type="text" name="company"/>
                    </div>
                    <div className="name-search col-md-2">
                        <div className="search-label">Name</div>
                        <input className="name-input form-control" type="text" name="name"/>
                    </div>
                   <div className="phone-search col-md-2">
                        <div className="search-label">Phone</div>
                        <input className="phone-input form-control" type="text" name="phone"/>
                    </div>
                </div>
                <div className="row search-row">
                    <div className="address-search col-md-2">
                        <div className="search-label">Address</div>
                        <input className="address-input form-control" type="text" name="address"/>
                    </div>
                    <div className="city-search col-md-2">
                        <div className="search-label">City</div>
                        <input className="phone-input form-control" type="text" name="city"/>
                    </div>
                    <div className="zip-search col-md-2">
                        <div className="search-label">Zip Code</div>
                        <input className="phone-input form-control" type="text" name="zip"/>
                    </div>
                </div>
                <div className="row search-row">
                    <div className="col-md-12">
                        <button type="button" className="search-btn btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="col-md-12">
            <table id="all-result" className="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Address2</th>
                        <th>Address3</th>
                        <th>City</th>
                        <th>ZipCode</th>
                        <th>C.By</th>
                        <th>C.Date</th>
                        <th>U.By</th>
                        <th>U.Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Oliver Comapny</td>
                        <td>Oliver Han</td>
                        <td>12323123</td>
                        <td>2 Jarden, Newport Beach</td>
                        <td>Oliver Comapny</td>
                        <td>Oliver Han</td>
                        <td>92657</td>
                        <td>92657</td>
                        <td>Jerry</td>
                        <td>2016/6/28 00:00:00</td>
                        <td>Jerry</td>
                        <td>2016/6/28 00:00:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    );
  }
});

ReactDOM.render(<Application />, document.getElementById('content'));

