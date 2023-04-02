const db = require('./db')
const fs = require("fs");

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function Main() {
    let sqlData = fs
        .readFileSync("database.db.sql", { flag: "r" })
        .toString()
        .trim()
        .split(";");

    for (var a = 0; a < sqlData.length - 1; a++) {
        console.log(sqlData[a]);
        db.run(sqlData[a]);
        await sleep(15);
    }

    sqlData = fs
        .readFileSync("db_data.sql", { flag: "r" })
        .toString()
        .trim()
        .split(";");

    for (var a = 0; a < sqlData.length - 1; a++) {
        console.log(sqlData[a]);
        db.run(sqlData[a]);
        await sleep(15);
    }
}

Main();
