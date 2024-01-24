import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'webshop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const query = async (sql, values) => {
    console.log('SQL:', sql);
    try {
        const connection = await pool.getConnection();
        const result = await connection.query(sql, values);
        connection.release(); //  Releases the connection back to the pool, making it available for other queries.
        return result[0];
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to be caught by the error-handling middleware
    }
};