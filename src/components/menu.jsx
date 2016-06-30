var React = require("react");

require("../css/menu.css");

module.exports = React.createClass({
    displayname:"menu",
    getInitialState: function() {
      return {
          
      };
    },
    render: function() {
        return (
            <div className="menu-content">
                <ul className="menu-list">
                    <a href="/customer.html"><li>Customer</li></a>
                    <li>Supplier</li>
                    <li>Inventory Order</li>
                    <li>Invoice</li>
                    <li>Product</li>
                </ul>
            </div>
        );
    }
    
    
});