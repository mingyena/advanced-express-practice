//let contacts = require("../contacts");
const ContactModel = require("../models/ContactModel");

module.exports.list =  function list(request, response) {
    ContactModel.find({}).exec()
    .then(contacts => {
        return response.json(contacts);
    });
    

   }
module.exports.show =  function show(request, response) {

    ContactModel.findById(request.params.id).exec()
    .then(contacts => {
        return response.json(contacts);
    });
}

//already had 5 in the DB
let contactID = 6;

module.exports.create =  function create(request, response) {
    let newcontact = new ContactModel(request.body);
    newcontact._id = contactID;
    contactID++;
    newcontact.save()
    .then(newcontact => {
      return response.json(newcontact);
    });
}

   
   