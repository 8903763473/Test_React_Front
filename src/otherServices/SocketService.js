// SocketService.js
import { io } from 'socket.io-client';

class SocketService {
    socket;

    constructor() {
        console.log('Attempting to connect to WebSocket...');
        this.socket = io('http://localhost:8000', {
            transports: ['websocket', 'polling']
        });

        this.socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        this.socket.on('connect_error', (error) => {
            console.error('WebSocket connection error:', error);
        });

        this.socket.on('test', (data) => {
            console.log('Message from server:', data);
        });
    }

    joinRoom(userId) {
        this.socket.emit('joinRoom', userId);
    }

    getCart(userId) {
        this.socket.emit('getCart', userId);
    }

    onCartData(callback) {
        this.socket.on('cartData', (data) => {
            callback(data);
        });
    }

    onError(callback) {
        this.socket.on('error', (error) => {
            callback(error);
        });

    }

    disconnect() {
        this.socket.disconnect();
    }
}

const socketService = new SocketService();
export default socketService;
