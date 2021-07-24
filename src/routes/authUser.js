const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../controller/authUser");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../controller/validators");

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: " profile" });
// });

module.exports = router;
