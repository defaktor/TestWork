import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {MAIN_STYLE} from './theme';

export const isStrHref = str => {
  const RegExp =
    /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
  return RegExp.test(str);
};

export const TouchWrapper = ({onPress, children}) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Wrapper onPress={onPress} style={MAIN_STYLE.wrapper}>
      {children}
    </Wrapper>
  );
};
