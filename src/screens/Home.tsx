import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import Post from '../components/Post';
import {FlashList, ViewToken} from '@shopify/flash-list';
import {ScrollView} from 'react-native';
import store, {Store} from '../../store';
import {observer} from 'mobx-react-lite';
import {Post as PostType} from '../../types';
import Input from '../components/Input';

const Home = () => {
  const [text, setText] = useState('');
  const {posts, isLoading, fetchPosts} = store;
  const [inview, setInview] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <SafeAreaView style={{backgroundColor: '#030712', flex: 1}}>
      {isLoading && <ActivityIndicator color={'#fff'} size={40} />}
      {!isLoading && (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 0,
              paddingVertical: 10,
              borderBottomColor: '#111827',
              borderBottomWidth: 1,
            }}>
            <Text style={{color: '#fff', fontSize: 26}}>Welcom @User</Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                marginTop: 10,
                marginBottom: 15,
              }}>
              Discover the social
            </Text>

            <Input
              icon="card-search"
              placeholder={'Search'}
              value={text}
              onChangeText={setText}
              iconSize={34}
            />
          </View>
          <ScrollView style={{marginTop: 20}}>
            <FlashList
              ItemSeparatorComponent={() => <View style={{marginRight: 50}} />}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
              }}
              onViewableItemsChanged={({
                viewableItems,
              }: {
                viewableItems: ViewToken[];
              }) => {
                if (viewableItems.length > 0) {
                  const post = viewableItems[0].item as PostType;
                  const id = post.id;
                  setInview(id);
                }
              }}
              extraData={inview}
              data={posts}
              renderItem={({item, index}) => (
                <Post post={item} inview={inview} />
              )}
              estimatedItemSize={store.posts.length || 1}
              horizontal={true}
              keyExtractor={(item: PostType) => item.id}
            />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
