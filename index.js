import http from 'http';
import dotenv from 'dotenv';
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
import app from './src/server';

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.debug(`Welcome to this app`));
