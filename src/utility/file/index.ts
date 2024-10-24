
import * as fs from 'fs';
import * as htmlToPdf from 'html-pdf-node';

export async function crearteFile ( properties:any  ){   
      try {
        const file =   { content: properties.content } 
        const options = { format: properties.format   }
    
        htmlToPdf.generatePdf(file, options).then((pdfBuffer:any) => 
          fs.writeFileSync( properties.folder +"/"+ properties.file_name , pdfBuffer)     
        ) 
        
        return {
          status: true,
          message:"PDF Creado"
        }
        
      } catch (error) {
        return {
          status: false,
          message:"PDF Error: "+error
        }
    }
  }
  