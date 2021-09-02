const router = require("express").Router();
const joiSchemas = require("../middlewares/joiSchemas");
const joiMiddleware = require("../middlewares/joiMiddleware");
const userController = require("../controller/userController");

router.get("/", userController.get);

router.post(
  "/register",
  joiMiddleware(joiSchemas.userPOST, "body"),
  userController.post
);

router.post(
  "/login",
  joiMiddleware(joiSchemas.userLoginPOST, "body"),
  userController.login
);

module.exports = router;
