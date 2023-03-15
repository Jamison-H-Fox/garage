const router = require('express').Router();
const Users = require('./users-model');

router.get('/', async (req, res, next) => {
    try{
        res.json({ message: `working on the get /users endpoint` })
    } catch (err) {
        next(err);
    }
})

module.exports = router;