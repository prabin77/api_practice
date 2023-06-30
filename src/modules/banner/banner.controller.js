const { generateRandomString } = require("../../utilities/helpers");


class BannerController {

    constructor(servicebanner){
        this.banneerSvc= servicebanner;
    }
    bannerData = async (req, res, next) => {
        try {
            let data = req.body

            data.image = req.file.filename;

            let validData = await this.banneerSvc.validateBannerData(data);

            let activationToken = generateRandomString(100)

            res.json({
                result: validData,
                msg:"banner created successfully",
                meta: null
            })
            
        }
        catch (exception) {
            console.log(exception)
            next(exception)
        }

    }



}
module.exports= BannerController;