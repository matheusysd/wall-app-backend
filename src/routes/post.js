const express = require("express");
const router = express.Router();
const controller = require("../controller/postController");
const joiSchemas = require("../middlewares/joiSchemas");
const joiMiddleware = require("../middlewares/joiMiddleware");
const { validateJWTToken } = require("../service/jwtAuthentication");

router.get("/", controller.get);
router.post("/", validateJWTToken, joiMiddleware(joiSchemas.createEditPostPOST, "body"), controller.post);

module.exports = router;
