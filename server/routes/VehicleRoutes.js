
let express =  require("express");

const router = express.Router();
let {list,show,create} = require( "../controllers/VehicleController");

router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);

module.exports =  router;