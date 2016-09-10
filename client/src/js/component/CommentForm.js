var React = require('react');
var CommentForm = React.createClass({
  render:function(){
    return(
      <div>
      <h2>{this.props.cdata}</h2>
      </div>
    );
  }
});
module.exports = CommentForm;
