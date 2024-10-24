import express from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../config'
 


export function verifyToken(req:express.Request, res:express.Response, next:any) {
    const header = req.header('Authorization') || ''
    const token = header.split(' ')[1]

  
    if (!token) {
      return res.status(401).send({message: 'Unauthorized',status: 'error',data: null,errors: [{message:'Token not provied'}] })
    }

  
    try {
      const payload:any = jwt.verify(token, secretKey)

      req.body.id  = payload.id
      req.body.iat = payload.iat
      req.body.exp = payload.exp
      
      next()
    } catch (error) {
      return res.status(403).send({message: 'Unauthorized',status: 'error',data: null,errors: {message:'Token not valid'} })
    }
}