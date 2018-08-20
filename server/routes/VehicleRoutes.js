
let express =  require("express");
let bodyParser = require("body-parser");

const router = express.Router();
let {list,show,create} = require( "../controllers/VehicleController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);

module.exports =  router;