import { writable } from 'svelte/store';

// export const postData = writable({});

export const postData = writable('null');


// export const token = writable(localStorage.getItem('access_token') || '');

// export function setToken(newToken) {
//   localStorage.setItem('access_token', newToken);
//   token.set(newToken);
// }

// export function removeToken() {
//   localStorage.removeItem('access_token');
//   token.set('');
// }