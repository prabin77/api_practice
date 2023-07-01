const{z}= require("zod")


class BannerServices{

    validateBannerData= async(data)=>{
        try{
            const validationSchema = z.object({
                title: z.string().nonempty({ message: "Title cannot be empty" }),
                slogan: z.string().nonempty({ message: "Slogan cannot be empty" }),
                description: z.string().nonempty({message: "Description cannot be empty"}),
                image: z.string().nonempty({ message: "Image cannot be empty" })
            })
            let res= validationSchema.parse(data)
            return res;

        }
        catch(exception){
            let errorbag= {}
            exception.errors.map((item)=>{
                errorbag[item.path[0]]=item.message
            })
            throw{status: 400, msg: errorbag}
        }

    }


    
}

module.exports= BannerServices