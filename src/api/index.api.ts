import express from 'express' 
import {  ErrorHttp, STATUS_HTTP_SUCCESS, SuccessHttp } from '../messages/https.messages'
 
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

 