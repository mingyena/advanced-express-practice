
let express =  require("express");
let bodyParser = require("body-parser");

const router = express.Router();
let {list,show,create} = require( "../controllers/ProductController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);

module.exports =  router;