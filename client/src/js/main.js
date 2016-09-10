var React=require('react');
var ReactDOM=require('react-dom');
var CommentList = require('./component/CommentList');
var CommentForm = require('./component/CommentForm');
var CommentBox=React.createClass({
  getInitialState: function()
  {
    return({stateData:'This is State data'})
  },
  handleClick: function(data)
  {
    //e.preventDefault();
    this.setState({stateData:data});
  },
  render:function()
  {
    return(
    <div className="CommentBox">
    <h1>Comments</h1>
    <CommentForm cdata={this.state.stateData}/>
    <CommentList sdata={this.state.stateData} h={this.handleClick}/>
    <button type="button" onClick={this.handleClick}>Refresh</button>
    </div>
    )
  }
});

// var CommentForm = React.createClass({
//   render: function() {
//     return (
//       <div className="CommentForm">
//         Hello, world! I am a CommentForm.
//       </div>
//     );
//   }
// });

ReactDOM.render(<CommentBox/>,document.getElementById('app'));
