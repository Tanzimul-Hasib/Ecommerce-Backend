const express = require("express");
const router = express.Router();
Category = require("../models/category");
const { createCategory, getcategory } = require("../controller/category");
const {
  adminMiddleware,
  requireSignin,
} = require("../controller/controlMiddleWare");

router.post("/category/create", requireSignin, adminMiddleware, createCategory);
router.get("/category/getcategory", getcategory);

module.exports = router;
