const express = require('express')
const app = express()

// Require API routes
const apiRoutes = require('./routes')

// Import API Routes
app.use(apiRoutes)

module.exports = {
  path: '/api',
  handler: app
}