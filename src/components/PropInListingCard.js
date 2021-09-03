import React from 'react';
import {Image, Text, View} from 'react-native';
import {MAIN_STYLE} from '../theme';
import {isStrHref} from '../helpers';

export const PropInListingCard = ({propName, propValue}) => {
  return (
    <View style={MAIN_STYLE.propItem}>
      <View style={MAIN_STYLE.propItemName}>
        <Text>{`${propName}: `}</Text>
        {propName === 'avatar_url' && (
          <Image
            style={MAIN_STYLE.avatar}
            source={{
              uri: propValue,
            }}
          />
        )}
      </View>
      <Text
        style={{
          ...MAIN_STYLE.propItemValue,
          ...(isStrHref(propValue) ? MAIN_STYLE.href : {}),
        }}>
        {propValue}
      </Text>
    </View>
  );
};
