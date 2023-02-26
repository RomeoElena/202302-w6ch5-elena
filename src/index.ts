import http from 'http';
import { app } from './app.js';

const PORT = process.env.PORT || 5000;

export const server = http.createServer(app);

server.on('error', () => {
  console.log('Error');
});

server.on('listening', () => {
  console.log('listening in http://localhost:' + PORT);
});

server.listen(PORT);
