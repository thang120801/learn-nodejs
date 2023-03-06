import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './src/route/web';
import initAPIRoute from './src/route/api.js';
// import ket noi tu./configs/connectDB;

require('dotenv').config();
var morgan = require('morgan')



const app = express();
const port = process.env.PORT || 3000;  //chon port từ file .env (3000 hoặc nếu không sẽ chọn 3000)

app.use((req, res, next) => {
    console.log(' Bắt đầu ')
    console.log(req.method)
    next();
})

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config viewengine
configViewEngine(app);


initWebRoute(app);
initAPIRoute(app);

//xu ly loi 404
app.use((req, res) => {
    return res.render('404.ejs')
})


app.listen(port, () => {
    console.log(`Đang chạy trên http://localhost:${port}`)
})
