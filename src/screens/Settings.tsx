import React from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {backgroundColor: '#030712', flex: 1},
  text: {color: '#fff'},
});
