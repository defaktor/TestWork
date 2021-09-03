import React from 'react';
import {Text, View} from 'react-native';
import {MAIN_STYLE} from '../theme';
import {AppBtn} from './AppBtn';

export const Empty = ({handleRefresh}) => {
  return (
    <View style={MAIN_STYLE.empty}>
      <Text style={MAIN_STYLE.emptyTxt}>Что то пошло не так</Text>
      <AppBtn pressEvent={handleRefresh} txt={'Обновить'} />
    </View>
  );
};
