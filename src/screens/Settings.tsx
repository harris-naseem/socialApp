import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import store from '../../store';

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default observer(Settings);

const styles = StyleSheet.create({});
