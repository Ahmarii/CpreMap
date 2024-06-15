const fs = require('fs');
const { Client } = require('pg');

// console.log(process.env.db_cd)
console.log(process.env)

// PostgreSQL connection configuration
const config = {
    user: "avnadmin",
    password: process.env.password,
    host: process.host_name,
    port: 14871,
    database: "maindb",
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
    await db.query(`SELECT * FROM public.username_password WHERE username = 'slim'`, (err, res) => {
        if (err) {
            console.error(err)
        } else {
            console.log(res.rows)
        }
    })
}

// test()

module.exports = {
    db,
    closedb,
};
