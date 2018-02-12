import * as types from './actionTypes';

// function url() {
//   return 'www.url.com';
// }

const receiveStuff = stuff => ({
    type: types.RECEIVE_STUFF,
    stuff
});

// export function fetchStuff() {
//   return dispatch => {
//     return fetch(url(), {
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//       headers: {
//         'x-api-key': apiKey,
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(json => dispatch(receiveStuff(json)));
//   };
// }
