let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");
let theParser = bodyParser.json();
const app = express();

app.use(theParser);
//tell the sever to GET the file
//find the static page in PUBLIC FOLDER
//app.use(express.static('public'));

app.get("/comments",function(request,response){
    response.json(comments);
});
app.get("/products",function(request,response){
  response.json(products);
});
app.get("/vehicles",function(request,response){
  response.json(vehicles);
});
app.get("/contacts",function(request,response){
    response.json(contacts);
});

//////////////////////:id
app.get("/comment/:id",function(request,response){
  return response.send(comments[request.params.id-1]);
});
app.get("/product/:id",function(request,response){
  return response.send(products[request.params.id-1]);
});
app.get("/vehicle/:id",function(request,response){
  return response.send(vehicles[request.params.id-1]);
});
app.get("/contact/:id",function(request,response){
  return response.send(contacts[request.params.id-1]);
});

////////////////////Post
app.post("/comments",function(request,response){
   let newcomment = {};
   newcomment = request.body;
   newcomment._id = comments[comments.length-1]._id +1;
    comments.push(newcomment); 
    return response.send(comments);

  });


//req->request, res->response


app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});


