import { logger } from "../logs/logger"



export function httpResponse( message:string='', status:string='Not Found', data:any, errors:any  ){
 
     return {
        message: message,
        status: status,
        data: data,
        errors: errors
    }
}   



export function MessageServerErrorContoller( message:string = ""){
 
    const response = {
        message: "There is no information to display due to an internal server error: "+message,
        status: false,
        data: "Not Found",
        errors: null
    } 

    logger.error(JSON.stringify(response))

    return response
}   