const router = require("express").Router();
const controller = require("../../controller");

// "/api/books"
router.route("/").get(controller.findAll).post(controller.create);

// "/api/books/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
