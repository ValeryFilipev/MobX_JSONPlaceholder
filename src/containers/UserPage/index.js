import React from 'react';
import { observer, inject } from 'mobx-react';
import {Link} from "react-router-dom";

class UserPage extends React.Component {
  componentWillMount() {
    const { PostsStore, match: { params: { id } } } = this.props;
    
    PostsStore.getUserById(id);
  }
  render() {
    const { PostsStore: { user, loading } } = this.props;
  
    if (loading) {
      return <strong>Loading...</strong>;
    }
  
    return (
      <div>
        <p>
          <img src="https://via.placeholder.com/150/92c952" alt="User's face"/>
        </p>
        
        <h1>{ user.name }</h1>
        <h2>{ user.username }</h2>
        <p>
          { user.email }
        </p>
  
        <p>
          <Link to={`/`}>Go to main>></Link>
        </p>
      </div>
    );
  }
}

export default inject('PostsStore')(observer(UserPage));
