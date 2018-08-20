const VehicleModel = require("../models/VehicleModel");

module.exports.list =  function list(request, response) {
    VehicleModel.find({}).exec()
    .then(vehicles => {
        return response.json(vehicles);
    });
    

   }
module.exports.show =  function show(request, response) {

    VehicleModel.findById(request.params.id).exec()
    .then(vehicles => {
        return response.json(vehicles);
    });
}

//already had 5 in the DB

module.exports.create =  function create(request, response) {
    let newvehicle = new VehicleModel(request.body);
    newvehicle.save()
    .then(newvehicle => {
      return response.json(newvehicle);
    });
}
