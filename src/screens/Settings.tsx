import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import store from '../../store';
import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#030712', flex: 1}}>
      <Text style={{color: '#fff'}}>Settings</Text>
    </SafeAreaView>
  );
};

export default observer(Settings);

const styles = StyleSheet.create({});
