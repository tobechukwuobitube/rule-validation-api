import express from 'express';
import cors from 'cors';

const app = express();

import appRoutes from './routes/index.js';
import { verifyPayload } from './helpers/verifyPayload.js';

app.use(cors());
app.use(
	express.json({
		verify: verifyPayload
	})
);
app.use(appRoutes);

export default app;
