const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/index', (req, res) => {
    res.render('index', {
        name: req.query.name,
        roomId: req.query.roomId
    });
});

router.post('/login', (req, res) => {
    res.redirect(`/index?name=${req.body.name}&roomId=${req.body.roomId}`);
});

module.exports = router;