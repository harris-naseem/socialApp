import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const aspectRatio = 0.95;
const screenWidth = Dimensions.get('screen').width;

const itemWidth = screenWidth;
const itemHeight = itemWidth / aspectRatio;

const SkeltonPost = () => {
  return (
    <SkeletonPlaceholder backgroundColor="#111827" borderRadius={12}>
      <SkeletonPlaceholder.Item style={styles.container}>
        <SkeletonPlaceholder.Item style={styles.userImage} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item style={styles.video} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeltonPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    borderColor: 'black',
    backgroundColor: '#111827',
    width: itemWidth,
    height: itemHeight,
    marginVertical: 10,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  video: {
    width: '100%',
    aspectRatio: 1.3,
    marginVertical: 10,
    backgroundColor: '#000',
  },
});
