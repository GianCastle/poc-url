import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface Env {
    PORT?: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_STORAGE: string;
    APP_URL: string;
}

interface Config {
    PORT?: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_STORAGE: string;
    APP_URL: string;
}

const getConfig = (): Env => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    DB_USER: process.env.DB_USER ? process.env.DB_USER : '',
    DB_PASSWORD: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '',
    DB_STORAGE: process.env.DB_STORAGE ? process.env.DB_STORAGE : '',
    APP_URL: process.env.APP_URL ? process.env.APP_URL : `http://localhost:3000`
  };
};

const getSanitzedConfig = (config: Env): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;

