const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../controller/authAdmin");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../controller/validators");

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

// router.post("/admin/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: " profile" });
// });

module.exports = router;
