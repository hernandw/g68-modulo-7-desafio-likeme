import express from 'express';
import routes from './routes/router.js'
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla

//Middlewares

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));