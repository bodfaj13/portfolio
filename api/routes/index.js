const { Router } = require('express')
const router = Router()

router.post('/test', (req, res, next) => {
  console.log('response coming')
  console.log(req.body.data)
  res.status(200).json({
    message: 'Successfull'
  })
})

module.exports = router
