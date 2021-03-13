const ProductModel = require("../Model/Products");

exports.getProducts = async (req, res, next) => {
  //(page - 1 ) * Limit

  const ProductsInDatabase = await ProductModel.find()
    .skip((+req.params.page - 1) * +req.params.limit)
    .limit(+req.params.limit);
  const TotalNumberOfDocuments = await ProductModel.find().countDocuments();
  return res.json({
    response: ProductsInDatabase,
    TotalNumber: TotalNumberOfDocuments,
  });
};

exports.postProduct = async (req, res, next) => {
  if (
    Object.entries(req.body).length === 0 ||
    Object.entries(req.body.title).length === 0 ||
    Object.entries(req.body.image).length === 0
  ) {
    return res.json({ response: "Please Provide title, image" });
  }

  const newProduct = new ProductModel({
    Title: req.body.title,
    Image: req.body.image,
    Description: req.body.DescriptionState,
  });

  const SavingProduct = await newProduct.save();
  if (SavingProduct) {
    res.json({ response: "Product Saved Successfully" });
  }
};
