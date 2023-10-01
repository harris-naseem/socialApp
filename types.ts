import {StackNavigationProp} from '@react-navigation/stack';

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

export type Post = {
  contentMeta: ContentMeta[];
  numOfLikes: number;
  publishedAt: string;
  userId: string;
  textCaption: string;
  mentions: string[];
  numOfComments: number;
  id: string;
  tags: string[];
  thumbnail?: string;
};

export type MainNavigationParamList = {
  SignIn: undefined;
  TabNavigator: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

export type SignInScreenProps = StackNavigationProp<
  MainNavigationParamList,
  'SignIn'
>;

export type HomeScreenProps = StackNavigationProp<
  TabNavigatorParamList,
  'Home'
>;

export type SettingsScreenProps = StackNavigationProp<
  TabNavigatorParamList,
  'Settings'
>;
