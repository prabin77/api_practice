const BannerController = require("./banner.controller")
const BannerServices= require("./banner.services")

const servicebanner = new BannerServices()
const bannerCtrl = new BannerController(servicebanner);

module.exports= {bannerCtrl, bannerSvc:servicebanner} 