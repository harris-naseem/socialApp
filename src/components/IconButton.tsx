import {View, Text, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from 'react';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
};

const IconButton = ({icon, text}: IconButtonProps) => {
  return (
    <View style={styles.container}>
      <EvilIcons name={icon} size={22} color="gray" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  text: {fontSize: 12, color: 'gray'},
});
