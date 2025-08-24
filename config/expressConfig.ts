import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import routes from "../src/routes";

dotenv.config();

export const app: Express = express();

const options: CorsOptions = {
	credentials: true,
	origin: process.env.APP_URL,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Todas as rotas centralizadas
app.use("/api", routes);