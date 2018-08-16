// let express = require("express");
// let comments = require("./comments");
// let products = require("./products");
// let vehicles = require("./vehicles");
// let contacts = require("./contacts");
// let bodyParser = require("body-parser");

// //import contactRouters
// let ContactRoutes = require("./routes/ContactRoutes");

let express = require("express");
let ContactRoutes  = require("./routes/ContactRoutes");

const app = express();
app.use(ContactRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});


//mongoose
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://rliu1:Ming1988!@ds119652.mlab.com:19652/expresspractice");
const ContactModel = require("./models/ContactModel");



// let theParser = bodyParser.json();
// const app = express();

// app.use(theParser);
// //tell the sever to GET the file
// //find the static page in PUBLIC FOLDER
// //app.use(express.static('public'));

// app.get("/comments",function(request,response){
//     response.json(comments);
// });
// app.get("/products",function(request,response){
//   response.json(products);
// });
// app.get("/vehicles",function(request,response){
//   response.json(vehicles);
// });


// //////////////////////:id
// app.get("/comment/:id",function(request,response){
//   return response.send(comments[request.params.id-1]);
// });
// app.get("/product/:id",function(request,response){
//   return response.send(products[request.params.id-1]);
// });
// app.get("/vehicle/:id",function(request,response){
//   return response.send(vehicles[request.params.id-1]);
// });

// ////////////////////Post
// app.post("/comments",function(request,response){
//    let newcomment = {};
//    newcomment = request.body;
//    newcomment._id = comments[comments.length-1]._id +1;
//     comments.push(newcomment); 
//     return response.send(comments);

//   });
//   app.post("/vehicles",function(request,response){
//     let newvehicle = {};
//     newvehicle = request.body;
//     newvehicle._id = vehicles[vehicles.length-1]._id +1;
//     vehicles.push(newvehicle); 
//      return response.send(vehicles);
 
//    });
//    app.post("/products",function(request,response){
//     let newproduct = {};
//     newproduct = request.body;
//     newproduct._id = products[products.length-1]._id +1;
//      products.push(newproduct); 
//      return response.send(newproduct);
 
//    });



// //req->request, res->response


// app.listen(3001, (err) => {
// if (err) {
//   return console.log("Error", err);
// }
// console.log("Web server is now living in apartment 3001");
// });


