import * as CryptoJS from 'crypto-js'
import { secretPassworkKeyAPI } from '../config'

export const encryptPassword = (value: string) => {
  // Convertir la clave a un objeto WordArray
  const key = CryptoJS.enc.Hex.parse(
    CryptoJS.SHA256(secretPassworkKeyAPI ).toString()
  )

  // Encriptar el valor usando AES y la clave
  const encrypted = CryptoJS.AES.encrypt(value, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.ZeroPadding
  })

  // Devolver el valor encriptado como string en Base64
  return encrypted.toString()

}


export const decryptPassword = (value: string) => {
    // Convertir la clave a un objeto WordArray
    const key = CryptoJS.enc.Hex.parse(
      CryptoJS.SHA256(secretPassworkKeyAPI ).toString()
    )
  
    // Encriptar el valor usando AES y la clave
    const encrypted = CryptoJS.AES.decrypt(value, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.ZeroPadding
    })
  
    // Devolver el valor encriptado como string en Base64
    return encrypted.toString()
  
  }

  