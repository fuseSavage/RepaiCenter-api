const express = require('express')
const responseCode = require('../configs/responseCode');

const router = express.Router()
const member = require('./member');
const garage = require('./garage');


router.get('/test',(req,res)=>{
    const name = req.query.name
    console.log(name)
    let timestamp = typeof parseInt(+new Date()/1000);
    res.json({ time:timestamp,code: responseCode.SUCCESS_NO_CONTENT })
    console.log('test')
})

router.use(member)
router.use(garage)

module.exports = router