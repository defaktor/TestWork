import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import * as actions from '../actions/index.js';

const UiStore = handleActions(
  {
    [actions.fetchDataRequest](state) {
      // console.log('fetchDataRequest');
      return {
        ...state,
        loading: true,
        lockUpdate: true,
        makeUpdate: false,
      };
    },
    [actions.fetchDataSuccess](state) {
      // console.log('fetchDataSuccess');
      return {
        ...state,
        loading: false,
        lockUpdate: true,
        makeUpdate: false,
      };
    },

    [actions.fetchDataFailure](state) {
      // console.log('fetchDataFailure');
      return {
        ...state,
        loading: false,
        lockUpdate: false,
        makeUpdate: false,
      };
    },
    [actions.setMakeUpdate](state, {payload: {status}}) {
      // console.log('setMakeUpdate');
      return {
        ...state,
        makeUpdate: status,
      };
    },
    [actions.setLockUpdate](state, {payload: {status}}) {
      // console.log('setLockUpdate');
      return {
        ...state,
        lockUpdate: status,
      };
    },
  },
  {
    loading: false,
    lockUpdate: false,
    makeUpdate: false,
  },
);

const DataStore = handleActions(
  {
    [actions.fetchDataSuccess](state, {payload: {data}}) {
      return {
        ...state,
        dataItems: data,
      };
    },
    [actions.fetchDataFailure()](state) {
      return {
        ...state,
        dataItems: [],
      };
    },
  },
  {
    dataItems: [],
  },
);

export default combineReducers({
  UiStore,
  DataStore,
});
