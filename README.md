# URL Shortener API

URL Shortener API is a NodeJS application using TypeScript. It stores urls in a SQLite database.

## Get the project

Follow these steps to get the project on your computer:

<br>

Install dependences:

```bash
npm i
```

Set up your env variables inside a `.env` file:

```dosini
PORT=#YOUR PORT
DB_USER=#YOUR DB USER
DB_PASSWORD=#YOUR DB PASSWORD
DB_STORAGE=#YOUR DB URL. For SQLite: "../../database.sqlite"
APP_URL=#YOUR DEFAULT APP URL. If Angular app in dev use http://localhost:4200
```

Create a `database.sqlite` file at the project root.

## Development server

You need to install globaly `nodemon` to run the dev server:

```bash
npm i -g nodemon
```

Then execute `npm run dev` in your terminal.
