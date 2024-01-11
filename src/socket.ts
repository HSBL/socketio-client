import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://demo.amilhasbala.online';


export const socket = io(URL);