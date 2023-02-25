import express from 'express';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/page2/', (req, res) => {
        // res.sendFile(path.join(__dirname, '/index.html'));
        res.render('index.ejs');
    })

    router.get('/', (req, res) => {
        // res.sendFile(path.join(__dirname, '/index.html'));
        res.send('HUSC !');
    })
    return app.use('/', router);
}

export default initWebRoute;