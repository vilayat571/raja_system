const express = require("express");
const { addMenu,getMenu } = require("../controllers/menu.js");

const router = express.Router();

router.post("/api/v1/menu/add", addMenu);
router.get('/api/v1/menus',getMenu)


module.exports = router;
