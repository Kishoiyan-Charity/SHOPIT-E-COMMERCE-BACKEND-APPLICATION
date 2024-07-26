const express = require("express");

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/admin/product/:id").delete(deleteProduct);

router.route("/admin/product/:id").put(updateProduct);
router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

router.route("/admin/product/new").post(newProduct);


module.exports = router;
