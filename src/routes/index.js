const router = require("express").Router();

const bannerRoutes = require("../modules/banner/banner.route")


router.use("/banner",bannerRoutes)


module.exports= router;