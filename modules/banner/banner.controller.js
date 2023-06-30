class BannerController{

    bannerData = (res , req, next)=>{
      try{ let data = req.body

        data.image = req.file.filename;

        
    }catch(exception){
        console.log(exception)
        next (exception)
    }

    }



}