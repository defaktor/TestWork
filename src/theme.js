import {Platform, StatusBar, StyleSheet} from 'react-native';

export const THEME = {
  DANGER_COLOR: '#e53935',
  MAIN_COLOR: '#3949ab',
};

export const MAIN_STYLE = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  fullScreen: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listingItems: {
    // padding: 40,
  },
  listingItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#d5d5d5',
  },
  href: {
    color: THEME.MAIN_COLOR,
  },
  propItem: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
    width: '100%',
  },
  propItemName: {
    width: '40%',
  },
  propItemValue: {
    width: '60%',
  },
  avatar: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  empty: {
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyTxt: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
