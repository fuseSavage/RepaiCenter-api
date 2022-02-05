const express = require('express')
const responseCode = require('../configs/responseCode');

const router = express.Router()
const authentication = require('./authentication')
const member = require('./member');
const garage = require('./garage');
const repairdetail = require('./repairdetail')
const report = require('./report')

const middleware = require('../middlewares/authentication')


router.get('/test',(req,res)=>{
    const name = req.query.name
    console.log(name)
    let timestamp = typeof parseInt(+new Date()/1000);
    res.json({ time:timestamp,code: responseCode.SUCCESS_NO_CONTENT })
    console.log('test')
})

router.use(authentication)
router.use(middleware, member)
router.use(middleware, garage)
router.use(middleware, repairdetail)
router.use(middleware, report)

module.exports = router