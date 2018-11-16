const express = require('express')
const router = express.Router()
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)

// router.get('/test-api', (req, res, next) => {
//   console.log('response coming')
//   res.status(200).json({
//     message: 'Successfull'
//   })
// })

module.exports = {
  path: '/api',
  handler: app
}