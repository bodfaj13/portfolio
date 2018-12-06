const ContactMessage = require('../models/contactMessage')

module.exports = {
  sendMessage (req, res, next) {
    var fullName = req.body.fullName
    var email = req.body.email
    var message = req.body.message
    var sentAt = Date()

    var messageDetails = {
      fullName: fullName,
      email: email,
      message: message,
      sentAt: sentAt
    }

    var sendMsg = new ContactMessage(messageDetails)
    sendMsg.save()
    .then(data => {
      res.status(200).send({
        success: "Contact sent successfully",
        entity: 'Contact'
      });
    })
    .catch(error => {
      res.status(404).send({
        error: error.message
      });
    })
  }
}