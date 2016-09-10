var React = require('react');
var Comment = require('./Comment');
var CommentList = React.createClass({

  updateClick: function(e)
  {
    e.preventDefault();
    this.props.h('New data');
  },

  render:function(){
    return(
      <div className="CommentList">
        This is a CommentList.
        <Comment author="Bharti">This is first comment</Comment>
        <Comment author="Anhtar">This is second comment</Comment>
        {this.props.sdata}
        <button type="button" onClick={this.updateClick}>Update</button>
      </div>
    );
  }
});
module.exports = CommentList;
