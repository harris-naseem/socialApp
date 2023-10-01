import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {
  Dispatch,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

type prop = {
  icon: string;
  placeholder: string;
  secure?: boolean;
  value: string;
  onChangeText: Dispatch<React.SetStateAction<string>>;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
  iconSize?: number;
};

const Input = forwardRef(
  (
    {
      icon,
      secure = false,
      placeholder,
      value,
      onChangeText,
      autoFocus = false,
      onSubmitEditing = () => {},
      iconSize = 22,
    }: prop,
    ref,
  ) => {
    const [hidePassword, setHidePassword] = useState(secure);

    const inputRef = useRef<TextInput | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            inputRef?.current?.focus();
          },
        };
      },
      [],
    );

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name={icon} size={iconSize} style={styles.iconLeft} />
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={'#706F6F'}
            autoCorrect={false}
            autoFocus={autoFocus}
            secureTextEntry={hidePassword}
            style={styles.textInput}
            onSubmitEditing={onSubmitEditing}
          />
          {secure && (
            <Icon
              onPress={() => setHidePassword(!hidePassword)}
              name={!hidePassword ? 'eye-outline' : 'eye-off-outline'}
              style={styles.iconRight}
            />
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#375DD0',
    alignItems: 'center',
    backgroundColor: '#1f2937',
  },
  container: {marginBottom: 20},
  iconLeft: {color: '#375DD0', marginRight: 10},
  iconRight: {color: '#375DD0', fontSize: 22},
  textInput: {color: '#fff', flex: 1},
});

export default Input;
