import { checkSchema } from "express-validator"

export const checkSchemaHolaMundo = checkSchema({
    name: {
        errorMessage: 'Invalid name',
        isString: true,
    }
     
})