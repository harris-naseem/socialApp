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
import {SignInScreenProps} from '../../types';

const Signin = () => {
  const navigation = useNavigation<SignInScreenProps>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    try {
      navigation.replace('TabNavigator');
    } catch (err) {
      setLoading(false);
    }
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={styles.container}
      collapsable
      contentContainerStyle={styles.contentContainer}>
      <Pressable onPress={Keyboard.dismiss} style={styles.loginSection}>
        <View style={styles.inputContainer}>
          <View style={styles.textSection}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginAccountText}>Access your account</Text>
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
              <Text style={styles.btnText}>Login</Text>
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

  contentContainer: {
    flex: 1,
  },

  textSection: {marginBottom: 20},

  loginText: {
    fontSize: 20,
    color: '#fff',
  },

  loginAccountText: {fontSize: 20, color: '#fff'},

  btnText: {color: '#fff'},

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
