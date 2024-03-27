import { config } from "dotenv";
config();

export default {
    url_service: process.env.SERVICE_URL || "",
    key: process.env.SERVICE_KEY || "",
    app_port: process.env.APP_PORT || "",
}