import nodemailer from 'nodemailer'
import { account_email } from '../../config'
export interface CustomEmail {
    has_file?: boolean,
    to:string,
    subject:string,
    text:string,
    attachments?:any
}
export async function sendCustomEmail( custom: CustomEmail) {

    const transporter = nodemailer.createTransport( account_email )
 
    const mailOptions = {
        from: account_email.auth.user,
        to: custom.to,
        subject: custom.subject,
        text: custom.text,
        attachments : !custom.has_file ? [] : custom.attachments
    }
     try {
        const info = await transporter.sendMail( mailOptions )
        return {
            status:true,
            message:'Correo enviado'
        }
    } catch (error) {
        return {
            status:false,
            message: 'Error al enviar el correo'+ JSON.stringify(error)
        }
    }

}