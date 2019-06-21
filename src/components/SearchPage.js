import React, { Component } from 'react';
import { connect } from 'react-redux';

class searchPage extends Component {
render() {
return (
<div>
  <h1 className="post_heading" >All Posts</h1>
<div className="row">
<div className="col-sm-6">dfgdf</div>
<div className="col-sm-6">dfgd</div>

</div>
  <div>{this.props.posts.map((post) => (
            <div key={post.id}>
                <div >location : {post.location}</div>
                 <div className="row">{post.hotelData.map((home,i) => <div className="col-sm-3" id="main"  key={i}>
                   <div  style={{border:'1px solid '}}>
                   <div>{home.name}</div>
                 <div>{home.dishes.map((dish,i) => <div id="main" key={i}><div>{dish.name}</div>
                 
                 {/* <div><img src={dish.dishPhoto} width="auto" alt="description of "/></div> */}
                 
                 </div>)}</div>
                 
                 
                 </div></div>)}</div>
            </div>
))}</div>
</div>
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(searchPage);