const ProductModel = require("../models/ProductModel");

module.exports.list =  function list(request, response) {
    ProductModel.find({}).exec()
    .then(vehicles => {
        return response.json(vehicles);
    });
    

   }
module.exports.show =  function show(request, response) {

    ProductModel.findById(request.params.id).exec()
    .then(vehicles => {
        return response.json(vehicles);
    });
}

//already had 5 in the DB

module.exports.create =  function create(request, response) {
    let newproduct = new ProductModel(request.body);
    newproduct.save()
    .then(newproduct => {
      return response.json(newproduct);
    });
}
