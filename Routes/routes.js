const express = require('express');
const utils = require('../utils/utils.js');
const { ensureAuthenticated, register, authenticatedUser } = require('../login_sys/main.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('helooooooooooo');
});

router.get('/profile', ensureAuthenticated, async (req, res) => {
    const data = await utils.getCustomerData(req.user.id);
    const firstname = data.firstname;
    const lastname = data.lastname;
    res.render('profile', { firstname, lastname });
});

router.get('/register', (req, res) => {
    const prompt = 'register';
    const command = 'submit';
    const button = 'submit';
    res.render('login_regis', { prompt, command, button });
});

router.get('/login', (req, res) => {
    const prompt = 'login';
    const command = 'login';
    const button = 'login';
    res.render('login_regis', { prompt, command, button });
});

router.post('/submit', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const succesOrNot = await register(username, password);

    if (!succesOrNot) {
        res.redirect('/register')
        return
    }

    res.redirect('/login');
});

router.post('/login', authenticatedUser);

module.exports = router;