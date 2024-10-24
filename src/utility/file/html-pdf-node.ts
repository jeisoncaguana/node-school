// html-pdf-node.d.ts

declare module "html-pdf-node" {
    // Define the IFile interface for specifying the content to be converted
    interface IFile {
      content: string; // The HTML content to be converted to PDF
    }
  
    // Define the IOptions interface for specifying PDF generation options
    interface IOptions {
      format?: string; // Optional format, e.g., 'A4', 'Letter'
      width?: string; // Optional width, e.g., '8in'
      height?: string; // Optional height, e.g., '11in'
      margin?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
      }; // Optional margin settings
    }
  
    // Define the function signature of the default export
    export function generatePdf(file: IFile, options?: IOptions): Promise<Buffer>;
  
    // Export the function as default
    export default generatePdf;
  }
  