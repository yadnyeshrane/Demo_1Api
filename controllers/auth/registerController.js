import Joi from "joi";
const  registerController={
    register(req,res,next)
    {

        //checklist
        //validate the request
        //authorie the req
        //check if user exist in db
        //prepare model
        //store in db
        //generate jwt-token
        //send response
        const registerationSchema=Joi.object({
            name:Joi.string().min(3).max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password:Joi.ref('password')
        })

        const {error}=registerationSchema.validate(req.body);
        if(error)
        {
            
        }
      res.json({"msg":"Hello from request"})
    }
}

export default registerController;