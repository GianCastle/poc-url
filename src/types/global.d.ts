// declare global {
//     namespace NodeJS {
//         export interface ProcessEnv {
//             PORT: string;
//         }
//     }

//     namespace Express {
//         export interface Request {
//             // user: User
//         }
//     }

// }

declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    JWT_SECRET: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_STORAGE: string;
    APP_URL: string;
  }
}
