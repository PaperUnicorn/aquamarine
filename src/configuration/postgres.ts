
//unused
import pgPromise from "pg-promise";
const port = parseInt( process.env.PGPORT || "5432", 10 );
const config = {
    database: process.env.PGDATABASE || "postgres",
    host: process.env.PGHOST || "localhost",
    port,
    user: process.env.PGUSER || "postgres"
};
const pgp = pgPromise();
const conn = pgp( config );
export default conn;
