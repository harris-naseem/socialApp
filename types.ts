export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export type AvailableQualities = {
  qualityDepth: string;
  fileSize: number;
  resolution: {
    width: number;
    height: number;
  };
};

export type ContentMeta = {
  type: MediaType;
  contentType: string;
  availableQualities: AvailableQualities[];
  fileId: string;
};

// fileId: 'https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/1a791d32-1385-4a89-aa54-c48a9674c5ca/media_max.jpeg';
export type Post = {
  contentMeta: ContentMeta[];
  numOfLikes: 3;
  publishedAt: string;
  userId: string;
  textCaption: string;
  mentions: string[];
  numOfComments: number;
  id: string;
  tags: string[];
};
