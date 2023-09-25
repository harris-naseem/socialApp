import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Input from '../components/Input';

const Signin = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const [loading, setLoading] = useState(false);

  const loginUser = useCallback((email: string, password: string) => {
    return true;
  }, []);

  const login = useCallback(async () => {
    try {
      setLoading(true);
      const user = await loginUser(email, password);
      if (!user) throw new Error('No user found');
      setLoading(false);
      navigation.navigate('TabNavigator');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [email, loginUser, navigation, password]);

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={styles.container}
      collapsable
      contentContainerStyle={{flex: 1}}>
      <Pressable onPress={Keyboard.dismiss} style={styles.loginSection}>
        <View style={styles.inputContainer}>
          <View style={{marginBottom: 20}}>
            <Text>Login</Text>
            <Text>Access your account</Text>
          </View>
          <Input
            ref={emailRef}
            autoFocus={true}
            placeholder={'Enter your email'}
            value={email}
            onChangeText={setEmail}
            icon="email"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <Input
            ref={passwordRef}
            placeholder={'Enter your password'}
            value={password}
            onChangeText={setPassword}
            icon="lock"
            secure
          />
          <Pressable style={styles.button} onPress={login}>
            {loading ? (
              <ActivityIndicator size={20} color={'#fff'} />
            ) : (
              <Text style={{color: '#fff'}}>Login</Text>
            )}
          </Pressable>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },

  loginSection: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#375DD0',
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
