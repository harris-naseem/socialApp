import {configure, makeAutoObservable, observable} from 'mobx';

import {Post} from './types';

configure({
  useProxies: 'never',
});

export class Store {
  posts: any = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
    });
  }

  fetchPosts = async () => {
    try {
      this.isLoading = true;
      const res = await fetch('https://devloot.free.beeceptor.com/timeline');
      const data = await res.json();
      const items = data.message.items;
      this.posts = items;
      this.isLoading = false;
      return {posts: this.posts, isLoading: this.isLoading};
    } catch (error) {
      this.posts = [];
      this.isLoading = false;
    }
  };
}
const store = new Store();
export default store;
