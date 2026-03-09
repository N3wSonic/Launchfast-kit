// LaunchFast Kit - Example File
// Full implementation available in the paid version
// https://n3wsonic.gumroad.com/l/lksgmo

// Billing routes example

import express from "express";

const router = express.Router();

// Creates Stripe checkout session
router.post("/create-checkout-session");

// Stripe webhook endpoint
router.post("/webhook");

// Opens Stripe customer portal
router.post("/customer-portal");

// Cancels subscription
router.post("/cancel-subscription");

export default router;
