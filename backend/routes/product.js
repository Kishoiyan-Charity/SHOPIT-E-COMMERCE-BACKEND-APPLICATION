const express = require("express");

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth')

const router = express.Router();

router.route("/products").get( getProducts);
router.route("/product/:id").get(getSingleProduct);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);


router.route("/admin/product/:id").delete(isAuthenticatedUser,authorizeRoles('admin'), deleteProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles('admin'), updateProduct);





module.exports = router;
