const ProductModel = require("../Model/Products");

const handleErrors = (err) => {
  const Errors = {
    Title: "No Error",
    Image: "No Error",
  };

  const { Title, Image } = err.errors;

  if (err.message.includes("Product validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      Errors[properties.path] = properties.message;
    });
  }

  return Errors;
};

exports.getProducts = async (req, res, next) => {
  //(page - 1 ) * Limit

  try {
    const ProductsInDatabase = await ProductModel.find()
      .skip((+req.params.page - 1) * +req.params.limit)
      .limit(+req.params.limit);

    const TotalNumberOfDocuments = await ProductModel.find().countDocuments();

    return res.status(200).json({
      response: ProductsInDatabase,
      TotalNumber: TotalNumberOfDocuments,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

exports.postProduct = async (req, res, next) => {
  const { title, image, DescriptionState } = req.body;

  const newProduct = new ProductModel({
    Title: title,
    Image: image,
    Description: DescriptionState,
  });

  try {
    const SavingProduct = await newProduct.save();

    res.status(200).json({ response: "Product Saved Successfully" });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
