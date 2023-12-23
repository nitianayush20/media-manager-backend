class ApiError extends Error{
    constructors(
        statusCode,
        message= "Somthing Went Wrong",
        errors = [] ,
        stack = ""
    ){
        //super(message)
        this.statusCode=statusCode
        this.message=message
        this.data=null
        this.success=false 
        this.errors= errors
        
        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructors) ;
        }
    }
}

export {ApiError}
