var React = require("react");

require("../css/topBar.css");

module.exports = React.createClass({
    displayname:"topBar",
    getInitialState: function() {
      return {
          
      };
    },
    render: function() {
        return (
            <div className="topbar-content">
                <div className="col-md-6 logo">KNK System Tool</div>
            </div>
        );
    }
    
    
});