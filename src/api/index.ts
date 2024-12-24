import express from 'express'
import { httpResponse } from '../utility/https'
import { validationResult } from 'express-validator'
import {  ErrorHttp, STATUS_HTTP_SUCCESS, SuccessHttp } from '../messages/https'
 
/**
 * Asynchronous function to handle the "Hola Mundo" API request
 * @param req - Express request object
 * @param res - Express response object
 * @returns HTTP response with success or error details
 */
export async function GetHolaMundoFunction(req: express.Request, res: express.Response) {
  const descriptionFunction = "Api Hola Mundo";
  // Simulated controller response
  const { status, data } = { status: true, data: [1, 2, 3] };
  // Handle error response
  if (!status) 
      return res.status(401).send(ErrorHttp(descriptionFunction, 'error', []));
  // Handle success response
  return res.status(200).send(SuccessHttp(descriptionFunction, STATUS_HTTP_SUCCESS, data));
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

