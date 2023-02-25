import http from 'http';
import { app } from './app';

const PORT = process.env.PORT || 4500;

const server = http.createServer(app);

server.listen(PORT);

server.on('listening', () => {
  console.log('listening in http://localhost:' + PORT);
});
