import express from 'express';
import jokesRoutes from "./routes/jokesRoutes.js"

export const app = express();

app.use(jokesRoutes);