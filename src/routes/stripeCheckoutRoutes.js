const express = require('express')
const stripeCheckoutController = require('../controllers/stripeCheckoutController')

const router = express.Router()

router.get(
  '/checkout-session/:orderId',
  stripeCheckoutController.getCheckoutSession
)

module.exports = router
