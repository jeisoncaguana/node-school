import { createLogger, format, transports } from 'winston'
import { getCurrentDate } from '../utility/index.utility'
import { MODE } from '../config/index.config'
  
const { combine } = format

const  fecha =  getCurrentDate()

export const logger = createLogger({
    level: 'info',
    format: combine(
      format.json(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }), 
      format.printf( (info:any) => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
 
    ),
    defaultMeta: { service: 'api-impresiones' },
    transports: [
      new transports.File({ 
          filename: `dist/assets/logs/logs_${fecha}.log`, 
          level: 'info'
        })
     ],
  })  
  
  if (MODE !== 'production') 
    logger.add(new transports.Console({ format: format.simple()}))

  export function saveLog( message:string = "", type?:"info"|"error" ) {
      if( type  === "info"){
        logger.info( message )
      }else {
        logger.error( message )
      }
  }
 