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

export const mostrarPostsQuery = async () =>{
    try {
        const sql = {
            text: "SELECT * FROM posts"
        };

        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows
        }else{
            return new Error("No hay posts")
        }
    } catch (error) {
        console.log(error)
    }
}

