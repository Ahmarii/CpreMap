const fs = require('fs');
const { Client } = require('pg');

// PostgreSQL connection configuration
const config = {
    user: "avnadmin",
    password: process.env.db_password,
    host: process.env.host_name,
    port: 14871,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.db_cd,
    },
};

(async function initializeDatabase() {
    db = new Client(config);
    try {
        await db.connect();
        console.log("Connected to the database");
    } catch (err) {
        console.error("Error connecting to the database", err);
        throw err;
    }
})();


async function closedb(db) {
    try {
        await db.end();
        console.log("Disconnected from the database");
    } catch (err) {
        console.error("Error disconnecting from the database", err);
    }
}



async function test() {
    await db.query(`SELECT * FROM public.username_password WHERE username = 'karn'`, (err, res) => {
        if (err) {
            console.err(err)
        } else {
            console.log(res.rows)
        }
    })
}



module.exports = {
    db,
    closedb,
};
