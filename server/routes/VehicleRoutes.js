
let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ContactController");


router.get("/vehicle", list);
router.get("/vehicle/:id", show);
router.post("/vehicle", create);
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

module.exports =  router;