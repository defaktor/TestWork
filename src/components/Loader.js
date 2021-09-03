import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {MAIN_STYLE} from '../theme';

export const Loader = () => {
  return (
    <View style={MAIN_STYLE.fullScreen}>
      <ActivityIndicator size="large" />
    </View>
  );
};
