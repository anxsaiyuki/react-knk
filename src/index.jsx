var React = require("react");
var ReactDOM = require("react-dom")

require("./css/indexContent.css");

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
          oliver: 1
      };
  },
  componentWillMount: function() {
      
  },
  componentDidMount: function() {

  },
  oliverfunction: function() {
     var tempOliver = this.state.oliver;
     tempOliver = tempOliver + 1;
     this.setState({oliver:tempOliver});
  },
  render: function() {
    return (
    <div>
            <div>{this.state.oliver}</div>
            
            <button type="button" className="btn bnt-primary" onClick={this.oliverfunction}>testing</button>
    </div>
    
    );
  }
});

ReactDOM.render(<Application />, document.getElementById('content'));

