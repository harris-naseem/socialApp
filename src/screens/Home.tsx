import {FlashList, ViewToken} from '@shopify/flash-list';
import {observer} from 'mobx-react-lite';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import store from '../../store';
import {Post as PostType} from '../../types';
import Input from '../components/Input';
import Post from '../components/Post';
import SkeltonPost from '../components/SkeltonPost';

const Home = () => {
  const [text, setText] = useState('');
  const {posts, isLoading, fetchPosts, setSelected, error} = store;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const viewableItemChange = useCallback(
    (viewableItems: ViewToken[], changed: ViewToken[]) => {
      if (viewableItems.length > 0) {
        const post = viewableItems[0].item as PostType;
        const id = post.id;
        setSelected(id);
      }
    },
    [setSelected],
  );

  const renderPost = useCallback(({item}: {item: PostType}) => {
    return <Post post={item} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.textContainer}>
          <Text style={styles.heading1}>Welcom @User</Text>
          <Text style={styles.heading2}>Discover the social</Text>

          <Input
            icon="card-search"
            placeholder={'Search'}
            value={text}
            onChangeText={setText}
            iconSize={34}
          />
        </View>
      </View>

      {isLoading ? (
        <SkeltonPost />
      ) : (
        <FlashList
          contentContainerStyle={styles.flatListContainer}
          snapToAlignment="start"
          decelerationRate="fast"
          pagingEnabled={true}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 90,
            minimumViewTime: 1000,
          }}
          snapToInterval={Dimensions.get('window').width}
          onViewableItemsChanged={({
            viewableItems,
            changed,
          }: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
          }) => viewableItemChange(viewableItems, changed)}
          data={posts}
          renderItem={renderPost}
          estimatedItemSize={posts.length || 1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: PostType) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {backgroundColor: '#030712', flex: 1},
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSection: {
    paddingHorizontal: 10,
  },
  flatListContainer: {},
  textContainer: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  heading1: {color: '#fff', fontSize: 26},
  heading2: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 15,
  },
  flatlistSeparator: {marginRight: 50},
});
