


const registerController=async(req,res,next)=>{
    try{

        res.status(200).json("HOW ARE YOU")
    }
    catch(err){
        next(err)
    }
}


module.exports={
    registerController
}