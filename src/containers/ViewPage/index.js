import React from "react";
import { Link } from 'react-router-dom';
import { observer, inject } from "mobx-react";

class ViewPage extends React.Component {
  componentWillMount() {
    const { PostsStore, match: { params: { id } } } = this.props;

    PostsStore.loadDetailsOfPost(id);
  }
  render() {
    const { PostsStore: { post, loading } } = this.props;

    if (loading) {
      return <strong>Loading...</strong>;
    }

    return (
      <div>
        <h1>{ post.title }</h1>
        
        <h4>{post.body}</h4>
        
        <p>
          <Link to={`/user/${post.id}`}>View profile>></Link>
        </p>
        
        <p>
          <Link to={`/`}>Go to main>></Link>
        </p>
      </div>
    );
  }
}

export default inject("PostsStore")(observer(ViewPage));
