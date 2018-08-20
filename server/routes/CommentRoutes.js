
let express =  require("express");
let bodyParser = require("body-parser");

const router = express.Router();
let {list,show,create} = require( "../controllers/CommentController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);

module.exports =  router;