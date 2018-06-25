import socketClient from 'socket.io-client'
const socket = socketClient.connect('http://localhost:3002');
export default socket;