class ApiError extends Errors{
    constructors(
        statusCode,
        message= "Somthing Went Wrong",
        errors = [] ,
        statck = ""
    ){
        super(message)
        this.statusCode=statusCode;
        this.data=null
        this.success=false 
        this.errors= errors
        
        if(statck){
            this.stack=statck;
        }else{
            Error.captureStackTrace(this,this.constructors) ;
        }
    }
}

export {ApiError}
