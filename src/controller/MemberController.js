const express = require('express')


const {
    getallMember,
} = require('../services/database')
const responseCode = require('../configs/responseCode')

const router = express.Router()



router.get('/all', (request, response, next) => {
    console.log(['hello'])
    try {
        getallMember().then(res => {
            if (res.status == responseCode.SUCCESS) {
                response.json({
                    code: 200,
                    message: 'get all success',
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router