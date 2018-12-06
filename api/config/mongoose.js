const mongoose = require('mongoose')
var config = require('./config')

mongoose.Promise = global.Promise
// mongoose.connect(config.dbURL, {useMongoClient: true})
mongoose.connect(config.dbURL, { useNewUrlParser: true})

module.exports = mongoose