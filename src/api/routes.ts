import { Router } from 'express'

import { verifyToken } from '../decorator/http/protected'
import { checkSchemaHolaMundo } from './validations'

import { GetHolaMundoFunction, PostHolaMundoFunction } from '.'

 
const api = Router()


 
api.get( "/hola", checkSchemaHolaMundo, GetHolaMundoFunction )
api.post( "/hola", checkSchemaHolaMundo, [verifyToken], PostHolaMundoFunction )

export default api