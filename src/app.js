import express from "express";
import morgan from "morgan";
// Routes
import main from "./routes/main";
import config from "./config";

const app = express();

// Settings
app.set("port",config.app_port);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());

// Routes
app.use(main);

export default app;