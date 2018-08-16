let contacts = require("../contacts");
//const ContactModel = require("../models/ContactModel");

module.exports.list =  function list(request, response) {
    response.json(contacts);

   }
   module.exports.show =  function show(request, response) {
   
    return response.send(contacts[request.params.id-1]);
}

let contactID = 1;

   module.exports.create =  function create(request, response) {
    let newcontact = {};
    newcontact = request.body;
    newcontact._id = contactID;
    contactID++;
     comments.push(newcontact); 
     return response.send(contacts);
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }

   
   