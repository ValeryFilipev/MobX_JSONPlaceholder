import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

//import 'PostPage.css';

class PostPage extends React.Component {
  componentWillMount() {
    const { PostsStore } = this.props;

    PostsStore.loadPosts();
    PostsStore.loadUsers();
  }
  render() {
    const postStyle = {
      float: 'left'
    };
    
    const { PostsStore } = this.props;

    if (PostsStore.loading) {
      return <strong>Loading...</strong>
    }

    return (
      <div style={postStyle}>
        <strong>Posts count: { PostsStore.postsCount }</strong>
        <p>
          { PostsStore.posts.map((post) => <Link key={post.id} to={`/post/${post.id}`}>{post.title}<br/></Link>) }
        </p>
  
        <p>
          { PostsStore.users.map((user) => <Link key={user.id} to={`/user/${user.id}`}>{user.name}<br/></Link>) }
        </p>
      </div>
    )
  }
}

export default inject('PostsStore')(observer(PostPage));
