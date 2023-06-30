const uploader = require("../../middlewares/uploader.middleware");
const {bannerCtrl} = require("./index")
const router = require("express").Router()


router.post("/banner-create",uploader.single("image"), bannerCtrl.bannerData)
//route.post("/banner-update",(req, res , next)=>{})

module.exports= router;