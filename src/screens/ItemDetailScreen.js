import React, {useCallback, useRef, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {MAIN_STYLE} from '../theme';
import {SafeAreaView} from 'react-native';

export const ItemDetailScreen = ({route}) => {
  let item = route.params.item;
  let itemId = route.params.item.id;
  const limit = 15;
  let data = [];
  const getProps = (level, data, index) => {
    Object.keys(level).map(key => {
      if (level[key] !== null && typeof level[key] === 'object') {
        data.push({index, value: `${key}`});
        if (index + 1 < 8) {
          data = getProps(level[key], data, index + 1);
        }
      } else {
        data.push({index, value: `${key}: ${level[key]}`});
      }
    });
    return data;
  };
  getProps(item, data, 0);
  const [currentProps, setCurrentProps] = useState(data.slice(0, limit));
  const yourRef = useRef(null);
  const keyExtractor = useCallback(
    (item, index) => `${itemId}-${index}`,
    [itemId],
  );
  const renderItem = useCallback(
    ({item}) => (
      <Text
        style={{...MAIN_STYLE.listingItem, paddingLeft: 10 * (item.index + 1)}}>
        {item.value}
      </Text>
    ),
    [],
  );
  const onEndReached = () => {
    if (data.length !== currentProps.length) {
      setCurrentProps(prev => {
        const length = prev.length;
        return [...prev, ...data.slice(length, length + limit)];
      });
    }
  };
  return (
    <SafeAreaView style={MAIN_STYLE.container}>
      <FlatList
        yourRef={yourRef}
        keyExtractor={keyExtractor}
        data={currentProps}
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        removeClippedSubviews={false}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};
