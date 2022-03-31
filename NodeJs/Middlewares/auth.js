let jwt=require('jsonwebtoken');

module.exports={
    isLoggedIn:async function(req,res,next){
        try{
            let token=req.headers.authorization;
            if(!token)
            {
                return res.status(400).json({'isLoggedIn':false});
            }else{
                let profileData=await jwt.verify(token,process.env.private_key);
                console.log(profileData)
                req.user=profileData;// add data into request object
                console.log(req.user);
                next();
            }
            
        }
        catch(error){

            next(error)
            return res.status(400).json({'isLoggedIn':false});

        }
    }
}