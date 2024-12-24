# Node API Escuela Grupo Cañas y Tapas

Este módulo es la API de la Escuela Grupo Cañas y Tapas.

## Versionar en git
Utiliza los siguientes comandos para versionar tu código:

```bash
new -  nueva funcionalidad	
enhance - mejoras en alguna funcionalidad
fix -  arreglar alguna funcionalidad 
remove - eliminar funcionalidad
```
## Instalación
Para instalar las dependencias del proyecto, ejecuta:
```bash
npm install 
```

## Configuración de variables de entorno
Configura las variables de entorno en un archivo .env:
```js
//# Configuraciones basicas de aplicacion 
PORT = 3000
MODE = 'developer'
PROTOCOL = 'http' // http / https
       
//# Contraseñas generales de aplicación
secretKeyAPI = 'kesecretKeyAPIy'
secretPassworkKeyAPI = 'secretPassworkKeyAPI'
expiresIn  =  '30m' // 1h, 10m, etc
 
//# ruta de directorios
path_certificado = '/Users/Documents/ssl_cyt'
key_ssl          =  'STAR_.key'
cert_ssl         = 'certificate_.crt'
ca_cert_ssl      = 'certificate_.crt'
ca_bundle_ssl    = 'bundle_.crt'
path_plublic     = '/Users/Documents/temporal_files'
assets_path_plublic     = '/Users/Documents/temporal_files'
  
//# Conexión a la base de datos SRV-DEVELOPER
dialect_app = 'mssql'
host_app = 'server'
username_app = 'username_app'
password_app = 'password_app'
database_app_security = 'database_app_security'
port_app = 1433

```

## Iniciar la aplicación
Para iniciar la aplicación en modo desarrollo, ejecuta:
```bash
npm run dev 
```