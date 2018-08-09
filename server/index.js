let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

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

//req->request, res->response


app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});


