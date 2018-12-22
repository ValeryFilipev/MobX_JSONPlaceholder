import { observable, action, computed, decorate } from "mobx";
import axios from "axios";
import Config from "../config/config";

class PostsStore {
  posts = [];
  
  users = [];

  post = {};
  
  user = {};

  loading = false;

  loadPosts() {
    this.loading = true;
    axios
      .get(`${Config.apiUrl}/posts`)
      .then(({ data }) => {
        this.posts = data;
      })
      .catch(e => console.warn(e))
      .finally(() => (this.loading = false));
  }
  
  loadUsers() {
    this.loading = true;
    axios
      .get(`${Config.apiUrl}/users`)
      .then(({ data }) => {
        this.users = data;
      })
      .catch(e => console.warn(e))
      .finally(() => (this.loading = false));
  }

  loadDetailsOfPost(id) {
    this.loading = true;
    axios
      .get(`${Config.apiUrl}/posts/${id}`)
      .then((response) => this.post = response.data)
      .catch(e => console.warn(e))
      .finally(() => (this.loading = false));
  }

  getUserById(id) {
    this.loading = true;
    axios
      .get(`${Config.apiUrl}/users/${id}`)
      .then((response) => this.user = response.data)
      .catch(e => console.warn(e))
      .finally(() => (this.loading = false));
  }

  get postsCount() {
    return this.posts.length;
  }
}

const EnhancedPostsStore = decorate(PostsStore, {
  posts: observable,
  post: observable,
  users: observable,
  user: observable,
  loading: observable,
  loadPosts: action,
  loadUsers: action,
  postsCount: computed
});

/** NOTE: only singleton should be exported */
export default new EnhancedPostsStore();
