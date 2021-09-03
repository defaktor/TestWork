import {createAction} from 'redux-actions';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const setMakeUpdate = createAction('SET_MAKE_UPDATE');
export const setLockUpdate = createAction('SET_LOCK_UPDATE');

export const fetchData =
  (url, method = 'GET', body = null, headers = {}) =>
  async dispatch => {
    dispatch(fetchDataRequest({}));
    headers['Access-Control-Allow-Origin'] = '*';
    try {
      if (body) {
        body = JSON.stringify(body);
      }
      const resp = await fetch(url, {method, body, headers});
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message || 'что то не так');
      }
      dispatch(fetchDataSuccess({data}));
    } catch (e) {
      dispatch(fetchDataFailure({}));
      console.log('Fetch ERROR: ');
      console.log(e);
      throw e;
    }
  };
