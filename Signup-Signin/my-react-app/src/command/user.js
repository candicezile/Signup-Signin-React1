
const { pool } = require("../database/index");

const addUser = async (userDetails) => {
    const { name, surname, email } = userDetails;
    const insertQuery = `INSERT INTO users (name, surname, email) VALUES ($1, $2, $3) RETURNING *;`;

    try {
        const result = await pool.query(insertQuery, [name, surname, email]);
        // Assuming that the result.rows[0] contains the inserted user
        return result.rows[0];
    } catch (error) {
        console.error("Error adding user:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};

module.exports = { addUser };
