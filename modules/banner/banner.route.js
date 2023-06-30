const { router } = require("../config/app")
const bannerCtrl= require("./")
const router = require("express").Router()


router.post("/banner", bannerCtrl.bannerData)
route.post("")

module.exports= router;