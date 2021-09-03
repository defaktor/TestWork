import React, {useCallback, useEffect, useRef} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {FlatList, RefreshControl, SafeAreaView, View} from 'react-native';
import {Loader} from '../components/Loader';
import {MAIN_STYLE} from '../theme';
import {ListingCard} from '../components/ListingCard';
import {Empty} from '../components/Empty';
import {useFocusEffect} from '@react-navigation/native';

const actionCreators = {
  fetchData: actions.fetchData,
  setMakeUpdate: actions.setMakeUpdate,
  setLockUpdate: actions.setLockUpdate,
};

const mapStateToProps = ({UiStore, DataStore}) => {
  const {dataItems} = DataStore;
  return {UiStore, dataItems};
};

const MainScreen = ({
  UiStore: {lockUpdate, makeUpdate, loading},
  dataItems,
  fetchData,
  setMakeUpdate,
  setLockUpdate,
  navigation,
}) => {
  const yourRef = useRef(null);
  const keyExtractor = useCallback(item => `${item.id}`, []);
  const renderItem = useCallback(
    ({item, index}) => (
      <ListingCard item={item} index={index} navigation={navigation} />
    ),
    [],
  );
  useEffect(() => {
    if (makeUpdate) {
      fetchData(
        'https://api.github.com/events?per_page=25&page=1',
        'GET',
        null,
        {
          accept: 'application/vnd.github.v3+json',
        },
      );
    }
  }, [fetchData, makeUpdate]);
  useFocusEffect(
    useCallback(() => {
      setMakeUpdate({status: true});
      return () => {
        setLockUpdate({status: true});
      };
    }, []),
  );
  useFocusEffect(
    useCallback(() => {
      const refreshLongTimer = setTimeout(() => {
        setMakeUpdate({status: true});
      }, 1000 * 60);
      // console.log('SET___refreshTimer 60 => ', refreshLongTimer);
      return () => {
        clearTimeout(refreshLongTimer);
        // console.log('RESET___§refreshTimer 60 => ', refreshLongTimer);
      };
    }, [dataItems]),
  );
  useFocusEffect(
    useCallback(() => {
      const refreshShortTimer = setTimeout(() => {
        if (lockUpdate) {
          setLockUpdate({status: false});
        }
      }, 1000 * 15);
      // console.log('SET___refreshTimer 15 => ', refreshShortTimer);
      return () => {
        clearTimeout(refreshShortTimer);
        // console.log('RESET___refreshTimer 15 => ', refreshShortTimer);
      };
    }, [lockUpdate]),
  );

  const handleRefresh = () => {
    if (!lockUpdate) {
      setMakeUpdate({status: true});
    }
  };
  if (loading) {
    return <Loader />;
  }
  if (dataItems.length === 0) {
    return <Empty handleRefresh={handleRefresh} />;
  }
  return (
    <SafeAreaView style={MAIN_STYLE.container}>
      <View style={MAIN_STYLE.listingItems}>
        <FlatList
          ref={yourRef}
          keyExtractor={keyExtractor}
          data={dataItems}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
export default connect(mapStateToProps, actionCreators)(MainScreen);
