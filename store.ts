import {configure, makeAutoObservable, observable} from 'mobx';

import {MediaType, Post} from './types';
import {createThumbnail} from 'react-native-create-thumbnail';

configure({
  useProxies: 'never',
});

export class Store {
  posts: Post[] = [];
  isLoading = true;
  selectedItem: string | null = null;
  error = false;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
      isLoading: observable,
      selectedItem: observable,
      error: observable,
    });
  }

  fetchPosts = async () => {
    try {
      this.isLoading = true;
      const res = await fetch('https://devloot.free.beeceptor.com/timeline');
      const data = await res.json();
      const items = data.message.items;
      console.log('Items', items);
      const addThumbnail = async (post: Post) => {
        if (post?.contentMeta[0].type === MediaType.VIDEO) {
          const thumbnail = await createThumbnail({
            url: post?.contentMeta[0].fileId,
            timeStamp: 0,
          });
          post.thumbnail = thumbnail?.path;
        }
        return post;
      };

      const posts = await Promise.all(items.map(addThumbnail));

      this.posts = posts;
      this.isLoading = false;
      return {posts: this.posts, isLoading: this.isLoading};
    } catch (error) {
      this.posts = [];
      this.isLoading = false;
      this.error = true;
    }
  };

  setSelected = (item: string) => {
    this.selectedItem = item;
  };
}
const store = new Store();
export default store;
