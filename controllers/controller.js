import path from "path";
import { addPostQuery } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
};

export const addPost = async (req, res) => {
  try {
    const { usuario, URL, descripcion } = req.body;
    
    const result = await addPostQuery(usuario, URL, descripcion);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};
