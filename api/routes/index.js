const { Router } = require('express')
const router = Router()

const functionController = require('../controllers/functionController')

router.post(
  "/sendmessage",
  functionController.sendMessage
);

module.exports = router
