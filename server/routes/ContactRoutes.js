
let express =  require("express");
let bodyParser = require("body-parser");

const router = express.Router();
let {list,show,create} = require( "../controllers/ContactController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);

module.exports =  router;