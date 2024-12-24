import dotenv from 'dotenv';
dotenv.config();

// # Configuraciones basicas de aplicacion 
export const PORT = process.env.PORT || 3000; // Puerto en el que correrá la aplicación
export const MODE = process.env.MODE || 'developer'; // Modo de la aplicación (desarrollo por defecto)
export const PROTOCOL = process.env.PROTOCOL || 'http'; // Protocolo utilizado (http por defecto)
export const VERSION = process.env.VERSION || "1.0"; // Versión de la aplicación

// # Contraseñas generales de aplicación
export const secretKey:any = process.env.secretKeyAPI || 'kesecretKeyAPIy'; // Clave secreta para la API
export const secretPassworkKeyAPI:any = process.env.secretPassworkKeyAPI || 'secretPassworkKeyAPI'; // Clave secreta para la API
export const expiresIn:any = process.env.expiresIn || '30m'; // Tiempo de expiración de tokens

// #Rutas de directorios
export const path_certificado = process.env.path_certificado || '/Users/Documents/ssl_cyt'; // Ruta del certificado SSL
export const key_ssl = process.env.key_ssl || 'key_ssl.key'; // Clave SSL
export const cert_ssl = process.env.cert_ssl || 'cert_ssl.key'; // Certificado SSL
export const ca_cert_ssl = process.env.ca_cert_ssl || 'ca_cert_ssl.key'; // Certificado CA SSL
export const ca_bundle_ssl = process.env.ca_bundle_ssl || 'ca_bundle_ssl.key'; // Bundle de certificados CA SSL
export const path_plublic = process.env.path_plublic || '/Users/Documents/temporal_files'; // Ruta de archivos públicos
export const assets_path_plublic = process.env.assets_path_plublic || '/Users/Documents/temporal_files'; // Ruta de archivos de assets públicos

// # Conexión a la base de datos SRV-DEVELOPER
export const conexion_app_security:any = {
    dialect: process.env.dialect_app || 'mssq', // Dialecto de la base de datos (mssql por defecto)
    host: process.env.host_app || 'host', // Host de la base de datos
    username: process.env.username_app || 'user', // Usuario de la base de datos
    password: process.env.password_app || 'pass', // Contraseña de la base de datos
    database: process.env.database_app_security || 'database', // Nombre de la base de datos
    port: process.env.port_app || 1433 // Puerto de la base de datos
}