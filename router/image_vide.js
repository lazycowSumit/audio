const express=require("express");
const { audioPlayersave } = require("../controller/image_video");
const router = express.Router()


router.post("/audioUpload",audioPlayersave);



module.exports=router;