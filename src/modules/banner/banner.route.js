const uploader = require("../../middlewares/uploader.middleware");
const {bannerCtrl} = require("./index")
const router = require("express").Router()


router.post("/banner-create",uploader.single("image"), bannerCtrl.bannerData)
//router.get("/banner-edit", bannerCtrl.editBannerData)
router.get("/banner-list", bannerCtrl.listBannerData)
router.post("/banner-delete", bannerCtrl.deleteBannerData)


module.exports= router;