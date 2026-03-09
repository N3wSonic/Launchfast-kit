// LaunchFast Kit - Example File
// Full implementation available in the paid version
// https://n3wsonic.gumroad.com/l/lksgmo

import express from "express";

const router = express.Router();

// Register new user
router.post("/register");

// Login user
router.post("/login");

// Get authenticated user
router.get("/me");

export default router;
