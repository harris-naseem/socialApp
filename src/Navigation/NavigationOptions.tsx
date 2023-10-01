import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
export const getTabIconName = (route: string, focused: boolean, color: any) => {
  switch (route) {
    case 'Home':
      if (focused) return <Entypo name="home" color="#4F8EF7" size={24} />;
      else return <Entypo name="home" color="#fff" size={24} />;

    case 'Settings':
      if (focused)
        return <MaterialIcons name="settings" color="#4F8EF7" size={24} />;
      else return <MaterialIcons name="settings" color="#fff" size={24} />;

    default:
      return (
        <MaterialIcons
          name="connect-without-contact"
          color="#4F8EF7"
          size={24}
        />
      );
  }
};

export const tabberOptions: any = ({route}: any) => {
  return {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'black',
      borderTopColor: 'black',
      marginBottom: 0,
    },

    tabBarIcon: ({focused, color}: any) => {
      return getTabIconName(route.name, focused, color);
    },
    tabBarActiveTintColor: '#375DD0',
    tabBarInactiveTintColor: '#fff',
  };
};
