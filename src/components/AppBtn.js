import React from 'react';
import {Text, View} from 'react-native';
import {TouchWrapper} from '../helpers';

export const AppBtn = ({pressEvent, txt}) => {
  const btnStyles = {
    wrapper: {
      width: '100%',
      alignItems: 'center',
    },
    btn: {
      width: '85%',
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#205CBE',
      borderStyle: 'dashed',
    },
    text: {
      fontSize: 17,
      color: '#244CBA',
    },
  };
  return (
    <TouchWrapper onPress={pressEvent} style={btnStyles.wrapper}>
      <View style={btnStyles.btn}>
        <Text style={btnStyles.text}>{txt}</Text>
      </View>
    </TouchWrapper>
  );
};
