import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';

import IconButton from './IconButton';
import {MediaType, Post as PostType} from '../../types';
import store from '../../store';
import {observer} from 'mobx-react-lite';

const aspectRatio = 0.95;
const screenWidth = Dimensions.get('screen').width;

const itemWidth = screenWidth;
const itemHeight = itemWidth / aspectRatio;

type PostProps = {
  post: PostType;
};

const logoSource = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
};

const Post = observer(({post}: PostProps) => {
  const videoRef = useRef<Video | null>(null);

  const {selectedItem} = store;

  const inView = useMemo(
    () => selectedItem === post.id,
    [post.id, selectedItem],
  );

  return (
    <Pressable style={[styles.container]}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image source={logoSource} style={styles.userImage} />
          <Text style={styles.username}>@Haris</Text>
          <Text style={styles.date}>
            {moment(post.publishedAt).format('MMM YY')}
          </Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={styles.headerLeftIcon}
          />
        </View>

        <Text style={styles.content} numberOfLines={1}>
          {post.textCaption}
        </Text>

        {post?.contentMeta[0]?.type === MediaType.IMAGE && (
          <Image
            source={{
              uri: post.contentMeta[0].fileId,
            }}
            style={styles.image}
          />
        )}

        {post?.contentMeta[0]?.type === MediaType.VIDEO ? (
          inView ? (
            <Video
              source={{
                uri: post.contentMeta[0].fileId,
              }}
              style={styles.video}
              controls={true}
              ref={videoRef}
              paused={!inView}
              muted={true}
              repeat={true}
            />
          ) : (
            <Image
              source={{
                uri: post?.thumbnail,
              }}
              style={styles.image}
            />
          )
        ) : null}

        <View style={styles.footer}>
          <IconButton icon="comment" text={post?.numOfComments} />
          <IconButton icon="heart" text={post?.numOfLikes} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    borderColor: 'black',
    backgroundColor: '#111827',
    width: itemWidth,
    height: itemHeight,
    marginVertical: 10,
  },
  headerContainer: {flexDirection: 'row', alignItems: 'center', columnGap: 6},
  headerLeftIcon: {marginLeft: 'auto'},

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
    color: '#fff',
  },
  username: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 20,
  },
  date: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 10,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: '#fff',
  },
  image: {
    width: '100%',
    aspectRatio: 1.3,
    marginVertical: 10,
  },

  video: {
    width: '100%',
    aspectRatio: 1.3,
    marginVertical: 10,
    backgroundColor: '#000',
  },

  // footer
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Post;
