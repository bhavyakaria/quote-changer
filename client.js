const WebSocket = require('ws');
const url = 'ws://localhost:8080';

const connection = new WebSocket(url);

connection.onopen = () => {
    connection.send('Message From Client');
}

connection.onerror = () => {
    console.log(`WebSocket Error: ${error}`);
}

connection.onmessage = (e) => {
    console.log(e.data);
}