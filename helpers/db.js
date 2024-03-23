require('dotenv').config();
const {Pool} = require('pg');

const query = (sql,value = []) => {
    return new Promise(async(resolve, reject) => {
        try {
            const pool = openDb();
            const result = await pool.query(sql,value);
            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })    
}

const openDb = () => {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: process.env.SSL,
    });
    return pool;
}

module.exports = {
    query
};