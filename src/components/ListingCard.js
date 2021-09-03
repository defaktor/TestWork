import React from 'react';
import {MAIN_STYLE} from '../theme';
import {View} from 'react-native';
import {PropInListingCard} from './PropInListingCard';
import {TouchWrapper} from '../helpers';

export const ListingCard = React.memo(({item, index, navigation}) => {
  const propsInCardConfig = {
    type: [],
    actor: ['display_login', 'avatar_url'],
  };
  const propsInCardConfigKeys = Object.keys(propsInCardConfig);
  const handleClick = () => {
    navigation.navigate('Detail', {item});
  };
  return (
    <TouchWrapper onPress={handleClick}>
      <View style={MAIN_STYLE.listingItem}>
        {propsInCardConfigKeys.map(prop => {
          if (propsInCardConfig[prop].length === 0) {
            return (
              <PropInListingCard
                key={`${index}-${prop}`}
                propName={prop}
                propValue={item[prop]}
              />
            );
          } else {
            return (
              <View key={`${index}-${prop}`}>
                {propsInCardConfig[prop].map(subProp => (
                  <PropInListingCard
                    key={`${index}-${prop}-${subProp}`}
                    propName={subProp}
                    propValue={item[prop][subProp]}
                  />
                ))}
              </View>
            );
          }
        })}
      </View>
    </TouchWrapper>
  );
});
