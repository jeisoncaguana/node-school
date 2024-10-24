import dotenv from 'dotenv'
dotenv.config()


// # Configuraciones basicas de aplicacion 
export const PORT = process.env.PORT
export const MODE = process.env.MODE
export const PROTOCOL = process.env.PROTOCOL
export const VERSION = "1.0"

// # Contraseñas generales de aplicación
export const secretKey:any =  process.env.secretKeyAPI
export const secretPassworkKeyAPI:any = process.env.secretPassworkKeyAPI

// #Rutas de directorios
export const path_certificado = process.env.path_certificado
export const key_ssl          = process.env.key_ssl
export const cert_ssl         = process.env.cert_ssl
export const ca_cert_ssl      = process.env.ca_cert_ssl
export const ca_bundle_ssl    = process.env.ca_bundle_ssl
export const path_plublic     = process.env.path_plublic
export const assets_path_plublic     = process.env.assets_path_plublic


// # Contraseñas de correo elextrónico 
export const account_email: any = {    
    host: process.env.email_host,
    port: process.env.email_port,
    secure: JSON.parse( process.env.email_secure || 'false' ),  
    auth: { 
        user: process.env.email_user,
        pass: process.env.email_pass 
     },
    tls: {
        rejectUnauthorized: JSON.parse(process.env.email_rejectUnauthorized || 'false')
    }
}


// # Conexión a la base de datos SRV-DEVELOPER
export const conexion_app_security:any = {
    dialect: process.env.dialect_app,
    host: process.env.host_app,
    username: process.env.username_app,
    password: process.env.password_app,
    database: process.env.database_app_security,
    port: process.env.port_app
  }

  // # Conexión a la base de datos SRV-DEVELOPER
export const conexion_app_mxp_secuence:any = {
  dialect: process.env.dialect_app,
  host: process.env.host_app,
  username: process.env.username_app,
  password: process.env.password_app,
  database: process.env.database_app_mxpsecuence,
  port: process.env.port_app
}

  // # Drivers de API Impresiones
export const driversapi = {
  SENOR:"SENOR",
  EPSON:"EPSON",
  POSIFLEX:"POSIFLEX",
  VCOCINA:"VCOCINA"
}

