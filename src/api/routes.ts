import { Router } from 'express'

import { verifyToken } from '../decorator/http/protected.decorator'
import { checkSchemaHolaMundo } from './validator/index.validator'

import { GetHolaMundoFunction } from './index.api'
 
const api = Router()

api.get( "/hola",   checkSchemaHolaMundo,   [verifyToken],  GetHolaMundoFunction )
 
export default api