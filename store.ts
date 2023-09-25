import {configure, makeAutoObservable, observable} from 'mobx';

import {Post} from './types';

configure({
  useProxies: 'never',
});

export class Store {
  posts: any = [
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 390364,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/1a791d32-1385-4a89-aa54-c48a9674c5ca/media_max.jpeg',
        },
      ],
      numOfLikes: 3,
      publishedAt: '2023-09-11T11:54:14.912Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 3,
      id: '942661c2-958a-45e1-89a1-60817bbc3dcc',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 4490009,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/dce3dbf9-b0d0-4ccc-81f0-85bcb7739a88/media_max.mp4',
        },
      ],
      numOfLikes: 2,
      publishedAt: '2023-09-11T09:21:04.071Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '5a36bad7-3842-4859-aee5-43717f1a5e77',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 1783669,
              resolution: {
                width: 3456,
                height: 4096,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/30c3b04b-b237-494b-a162-2d852596c803/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:19:24.935Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'ea6364b0-fab9-4cbb-b3ed-96edb5a889cb',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 4484794,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/c0654418-8b7b-4b92-9e2d-e51e53db0818/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:16:23.691Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '7331633e-e62a-4a4b-859c-f7a9708cb35a',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 4475521,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/83cac709-d493-4daa-8872-b56905227b14/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:13:13.571Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'd9ea561a-2499-4ce9-b11c-20a56c58a5fc',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 3050938,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/aa167d45-717c-4a04-9b07-2c5de894d8e1/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:11:14.751Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '1db62c97-ab2f-45d3-8f37-1fb1928e2011',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 3051802,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/e1f0a565-5139-47b8-b1cd-ec53a20ae95a/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:08:17.751Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '7a52336e-bdc9-4a99-bc9b-3231c6fefa22',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 3022779,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/b38f191f-c53a-4f1f-9b59-979880950060/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:03:44.590Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '38d4a179-b47c-499c-acc5-7c307cca96c8',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 18801667,
              resolution: {
                width: 1080,
                height: 1920,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/37f88a96-6303-4b50-b91a-ce77d5a28964/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T09:01:03.290Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '6bbdf97f-b2c4-48b5-b171-1259a6a163f1',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 4489981,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/815f04d5-16f4-4b18-b5f9-f54434e78799/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:52:52.498Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '57a5e7ef-fb4c-42a9-90ec-b5a03d94c9cd',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'VIDEO',
          contentType: 'video/mp4',
          availableQualities: [
            {
              bitrate: 3500,
              qualityDepth: 'MEDIUM',
              fileSize: 5357069,
              resolution: {
                width: 1920,
                height: 1080,
              },
            },
          ],
          fileId:
            'https://poc-post-video.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/6292f08e-1156-4c54-803e-8421c736a61f/media_max.mp4',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:45:56.236Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'f5995fe6-6b2d-4b9d-84eb-45227b017dc1',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 72706,
              resolution: {
                width: 1440,
                height: 1920,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/b05cf4b3-0a2a-4641-ae6a-c82905595f8a/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:45:16.796Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '97ee8682-3831-49e9-8c50-c87e5757f278',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 390364,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/e6b9c11f-d632-4ecd-9f86-9095a3a0aa52/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:44:50.129Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '0541a9e7-bdbb-41aa-9a14-8088cc9cc224',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 390364,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/61ec5c31-1866-4c65-986e-48cfbb2ba041/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:43:37.799Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '0193bfab-1259-47d1-af5b-0b9bc4a7eaf4',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 681664,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/8b176d92-b3d4-487a-9372-0beddf347f05/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:40:26.854Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '1b1cc6f7-8bcc-4a91-8529-7005e62c3477',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 390364,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/e31ae969-6557-414c-81f0-0faaaacb9916/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:37:51.693Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'bed59a0f-8a89-40a1-9e3d-4cef220beb1b',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 355942,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/d9549924-f284-47c6-b69b-57db13603230/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:31:48.006Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '2baf26d2-c83b-4c97-8ff7-48dfefbe19cb',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 390364,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/a7467d77-c412-4828-9d61-17d5b318be26/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:29:21.188Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: '13fa8e7f-91f5-4bb9-833c-a97eb653835f',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 681664,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/93742f78-2e3a-45b0-8a6b-a5faa44d3e8b/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-11T08:28:45.089Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'b92bc79c-0ac6-4036-a099-e29b6225ccda',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 348537,
              resolution: {
                width: 3000,
                height: 4000,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/c2e3bbe8-dc1f-4f1a-bda9-e9ea48d0781a/media_max.jpeg',
        },
      ],
      numOfLikes: 0,
      publishedAt: '2023-09-11T08:27:58.628Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: '',
      mentions: [],
      numOfComments: 0,
      id: 'f3213e4f-5a34-4cbe-a708-034dfed31362',
      tags: [],
    },
    {
      contentMeta: [
        {
          type: 'IMAGE',
          contentType: 'image/jpeg',
          availableQualities: [
            {
              qualityDepth: 'MEDIUM',
              fileSize: 16949,
              resolution: {
                width: 440,
                height: 586,
              },
            },
          ],
          fileId:
            'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/d2e7ebc2-f3cc-4b08-bb84-ae327d7253ad/media_max.jpeg',
        },
      ],
      numOfLikes: 1,
      publishedAt: '2023-09-08T14:09:42.888Z',
      userId: 'e14cd7bc-55d1-4cb2-94f0-0f971459c937',
      textCaption: 'Humble gift ',
      mentions: [],
      numOfComments: 0,
      id: 'db8e4afd-3be5-416f-ab30-d072565cf38f',
      tags: [],
    },
  ];

  isLoading = true;

  constructor() {
    makeAutoObservable(this, {
      posts: observable,
    });
  }

  fetchPosts = async () => {
    try {
      // this.isLoading = true;
      // const res = await fetch('https://devloot.free.beeceptor.com/timeline');
      // const data = await res.json();
      // const items = data.message.items;
      // this.posts = items;
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
