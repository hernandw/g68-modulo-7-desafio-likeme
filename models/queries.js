import { pool } from "../config/pg.js";

export const addPostQuery = async (usuario, URL, descripcion) => {
  const query = {
    text: `INSERT INTO posts (usuario, url, descripcion) VALUES ($1, $2, $3) RETURNING *`,
    values: [usuario, URL, descripcion],
  };
  try {
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return new Error("Error adding post");
    }
  } catch (error) {
    console.log(error.message);
  }
};
