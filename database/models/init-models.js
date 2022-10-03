const DataTypes = require("sequelize").DataTypes;
const _carts = require("./carts");
const _category = require("./category");
const _pictures = require("./pictures");
const _product_cart = require("./product_cart");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const carts = _carts(sequelize, DataTypes);
  const category = _category(sequelize, DataTypes);
  const pictures = _pictures(sequelize, DataTypes);
  const product_cart = _product_cart(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  product_cart.belongsTo(carts, { as: "carts", foreignKey: "cart_id"});
  carts.hasMany(product_cart, { as: "product_carts", foreignKey: "cart_id"});
  carts.belongsTo(users, { as: "users", foreignKey: "user_id"});
  users.hasOne(carts, { as: "carts", foreignKey: "user_id"});
  products.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(products, { as: "products", foreignKey: "category_id"});
  pictures.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(pictures, { as: "pictures", foreignKey: "product_id"});
  product_cart.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_cart, { as: "product_carts", foreignKey: "product_id"});

  return {
    carts,
    category,
    pictures,
    product_cart,
    products,
    users,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;