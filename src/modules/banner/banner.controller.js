const { generateRandomString } = require("../../utilities/helpers");

const bannerlist =[]


class BannerController {
    constructor(servicebanner){
        this.bannerSvc= servicebanner;
    }
    bannerData = async (req, res, next) => {
        try {
            let data = req.body

            data.image = req.file.filename;

            let validData = await this.bannerSvc.validateBannerData(data);
            bannerlist.push(validData)

            let activationToken = generateRandomString(100)
            res.json({
                result: validData,
                msg:"banner created successfully",
                meta: null
            })
            console.log(bannerlist)
            
        }
        catch (exception) {
            console.log(exception)
            next(exception)
        }

    }

    // editBannerData = (req , res , next)=>{
    //     try{
    //         if(!this.bannerData.data){
    //             next(bannerData())

    //         }
    //         else{
    //             this.bannerData.data = ''

    //             res.json({

    //                 meta: null
    //             })

    //         }
    //     } catch(exception){
    //         console.log(exception)
    //         next(exception)

    //     }


        
    // }

    listBannerData = (req , res , next)=>{
        
        try{
            if(bannerlist){
                

                res.json({
                    result : bannerlist,
                    msg:"banner listed",
                    meta: null
                })
               console.log(bannerlist)

                
            }
            else{
                console.log("no data")
                return "No data found"

            }
            
        } catch(exception){
            console.log(exception)
            next(exception)

        }


        
    }

    deleteBannerData = (req , res , next)=>{
        let index = 1
        try{
            if(bannerlist){
              delete bannerlist[index]
                res.json({
                    result : bannerlist,
                    msg:"banner deleted",
                    meta: null
                })
           // console.log(bannerlist);

            }
            else{
                return "No data found"

            }
        } catch(exception){
            console.log(exception)
            next(exception)

        }


        
    }

}
module.exports= BannerController;