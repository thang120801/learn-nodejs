import express from "express";
import configViewEngine from './src/configs/ViewEngine';
import initWebRoute from './src/route/web';
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;

//su dung view engine
configViewEngine(app);
//khoi tao web router
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
