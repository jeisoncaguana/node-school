import express from 'express'
import { httpResponse } from '../utility/https'
import { validationResult } from 'express-validator'
 
export async function GetHolaMundoFunction( req:express.Request, res:express.Response ) {

   const descriptionFunction = "Api Hola Mundo"

   const request:any = { status:true, data:[1,2,3]}// controlador 

   if( !request.status )     
    return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))

return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}






export async function PostHolaMundoFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = "Api Hola Mundo"
 
    const errors = validationResult(req)
    if (!errors.isEmpty()) 
      return res.status(400).json({ message:descriptionFunction,status:'error', data:null, errors: errors.array() })
  
  
    const {  name } = req.body

    
    const request:any = { status:true, data:name }// controlador 
 
    if( !request.status )     
     return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))
 
 return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
 }

