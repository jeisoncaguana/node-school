import express from 'express'
import https from 'https'
import fs from 'fs' 
import morgan from 'morgan'

import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

import { htmlHome } from './utility/utility'
import { ca_bundle_ssl, ca_cert_ssl, cert_ssl, key_ssl, MODE, 
         path_certificado, 
         PORT, 
         PROTOCOL } from './config'

import api from './api/routes'
 
class ServerApiNode {
    constructor(){ 
        this.App()
    }  
    
    getOptionsSSL() {
        return {
            key: fs.readFileSync( `${path_certificado}/${key_ssl}`,  {encoding:'utf8'}),
            cert: fs.readFileSync( `${path_certificado}/${cert_ssl}` ,  {encoding:'utf8'}),
            ca: [
                fs.readFileSync( `${path_certificado}/${ca_cert_ssl}`,  {encoding:'utf8'}),
                fs.readFileSync(`${path_certificado}/${ca_bundle_ssl}`,  {encoding:'utf8'})
            ]
        }   
    }
    App(){
        // Inicializamos express y creamos el servidor HTTP
        const app = express()        
      
            
            //middleware que convierte los datos JSON recibidos en objetos JavaScript accesibles a través de req.body
            app.use( express.json() )

            //middleware que analiza las solicitudes codificadas en URL (URL-encoded).
            // - extended: false: Utiliza querystring, solo maneja objetos planos.
            // - extended: true: Utiliza qs, maneja objetos anidados y matrices.
            app.use( express.urlencoded({ extended: false }) )

           //middleware que maneja la seguridad de tu aplicación de manera sencilla
            app.use( helmet() )

            //middleware ayuda a reducir el tamaño de los datos que se envían al cliente 
            app.use( compression() )  

            // middleware CORS (Cross-Origin Resource Sharing) para permitir solicitudes de cualquier origen y enviar cookies o credenciales con las solicitudes.
            // origin: true: Permite solicitudes de cualquier origen. En lugar de usar un comodín (*), responde con el origen específico de la solicitud.
            // credentials: true: Permite el envío de credenciales (como cookies, cabeceras de autenticación, etc.) en las solicitudes CORS12.
            app.use( cors({origin:true, credentials:true}) )            
   
            
            // rutas del proyecto
            app.use( "/v1",  api ) 
              
 
            app.get( "/",  (req, res) => {
                 res.status(200).send(htmlHome)                
            })

            //Retorna respuesta por defecto
            app.use((req, res , ) => 
                res.status(404).send({
                    message: `${req.method}:${req.url} no existe`,
                    status: "Not Found",
                    data: null,
                    errors: []
                })                
            )  
              
    
        // Colorea las respuestas por consola, ideal para el debugueo
        if( MODE === 'developer') 
            app.use( morgan('dev') )
  
                 
  
        if ( PROTOCOL  === 'https'){
                //Crea el servidor HTTPS
                const server =  https.createServer(this.getOptionsSSL() ,  app )
     
                //Levanta el servidor en el puerto 
                server.listen(PORT , () => {
                    console.log(`${PROTOCOL}//localhost:${PORT}` )
                })
        }else{ 
            app.listen(PORT , () => {
                console.log(`${PROTOCOL}//localhost:${PORT}` )
            })

        }
            
           
            
    } 
}



new ServerApiNode()  