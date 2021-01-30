import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser'

const app = express();

import appRoutes from './routes';
import { verifyPayload } from './helpers/verifyPayload';

app.use(cors());
app.use(
	express.json({
		verify: verifyPayload
	})
);
app.use(appRoutes);

export default app;
