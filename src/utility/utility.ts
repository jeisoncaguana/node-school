import os from 'os'
import { driversapi, VERSION } from '../config'
 
export const getCurrentDate = () => {
    const d = new Date()

    const curr_date  = d.getDate()
    const curr_month = d.getMonth()+1
    const curr_year  = d.getFullYear()
 

    return String(`${curr_date}-${curr_month}-${curr_year}`)

}
export const getMoney = ( value:any, driver:string ) => {

    if( driversapi.SENOR === driver || driversapi.EPSON  === driver ){
   
        return "EUR "+value
    } 
    
    const _value = Number(value)
    return _value.toLocaleString("en", {
        style: "currency",
        currency: "EUR"
    })
}

export const justifyTextRight = (text: string, lineLength: number) => {
    const lines: string[] = []
    const words = text.split(' ')
  
    let currentLine = ''
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const potentialLine = `${currentLine}${word} `
      if (potentialLine.length <= lineLength) {
        currentLine = potentialLine
      } else {
        lines.push(currentLine.trim())
        currentLine = `${word} `
      }
    }
  
    // Agregar la última línea
    lines.push(currentLine.trim())
  
    // Justificar las líneas
    const justifiedLines = lines.map((line) => line.padStart(lineLength, ' '))
  
    return justifiedLines.join('\n')
  }


  export const justifyTextLeft = (text: string, lineLength: number) => {
    const lines: string[] = []
    const words = text.split(' ')
  
    let currentLine = ''
    for (let i = 0 ;i < words.length ;i++) {
      const word = words[i]
      const potentialLine = `${currentLine}${word} `
      if (potentialLine.length <= lineLength) {
        currentLine = potentialLine
      } else {
        lines.push(currentLine.trim())
        currentLine = `${word} `
      }
    }
  
    // Agregar la última línea
    lines.push(currentLine.trim())
  
    // Justificar las líneas
    const justifiedLines = lines.map((line) => line.padEnd(lineLength, ' '))
  
    return justifiedLines.join('\n')
  }
 

  


  /**
   * Get commandLineBreak
   *
   * @param date
   * @returns String
   */
  export const commandLineBreak = (cadena:string) =>  {
      var nuevaCadena = ''
      for (var i = 0 ;i < cadena.length ;i++) {
          nuevaCadena += cadena.charAt(i)
          if ((i + 1) % 21 === 0) {
          nuevaCadena += '       '
          }
      }
      return nuevaCadena
  }
  
 

  export const filterChanels = ( jsonArray:any ) =>{
        // Paso 1: Crear un objeto para realizar el seguimiento de los canales
        const canales:any = {}
        // Paso 2: Recorrer el array y registrar todos los canales en el objeto de seguimiento
        jsonArray.forEach((elemento:any)=> {
          const chanel = elemento.chanel
          canales[chanel] = true
        })
        // Paso 3: Obtener la lista de todos los canales presentes en el objeto de seguimiento
        return Object.keys(canales)
  }

  export const filterByChanel = ( jsonArray:any, chanel:string ) =>{
    // Paso 1: Filtrar los objetos que tienen el campo "chanel" con el valor "ABC"
    return jsonArray.filter((elemento:any) => elemento.chanel === chanel )
}




export const filterWaiters = ( jsonArray:any ) =>{
  // Paso 1: Crear un objeto para realizar el seguimiento de los canales
  const waiters:any = {}
  // Paso 2: Recorrer el array y registrar todos los canales en el objeto de seguimiento
  jsonArray.forEach((elemento:any)=> {
    const waiter = elemento.waiter
    waiters[waiter] = true
  })
  // Paso 3: Obtener la lista de todos los canales presentes en el objeto de seguimiento
  return waiters
}

export const filterByWaiters = ( jsonArray:any, waiter:string ) =>{
// Paso 1: Filtrar los objetos que tienen el campo "waiter" con el valor "ABC"
return jsonArray.filter((elemento:any) => elemento.waiter === waiter )
}


export const filterStringByKey = ( jsonArray:any, key:string , value:any) =>{
  return jsonArray.filter((elemento:any) => elemento[key] === value )
}



export const OrderByAsc = (object:any, key:any ) => {
  return object.sort(function (a:any, b:any) {
          if (a[key] > b[key]) return 1
          if (a[key] < b[key]) return -1  
          return 0
    })
}

export const OrderByDesc = (object:any, key:any) => {
  return object.sort(function (a:any, b:any) {
          if (a[key] < b[key]) return 1
          if (a[key] > b[key]) return -1  
      return 0
    })

}


export const htmlHome = `<html>
            <head>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: 'Aptos', sans-serif;
                        font-size: 25px;
                    }
                </style>
            </head>
            <body>
                <h1>Escuelita Node Grupo Cañas y Tapas ${VERSION} </h1>
            </body>
        </html>`




export const calcularPorcentajeDiferencia = (ventaReal:any, proyeccionVenta:any) => {
  let diferencia = ventaReal - proyeccionVenta;
  let porcentajeDiferencia = (diferencia / proyeccionVenta) * 100;
  return porcentajeDiferencia.toFixed(2); // Redondea a 2 decimales
}

 







//----------------

export const   calcularIncremento = (valorInicial:number, valorFinal:number) => {

  if( valorInicial === 0)
    return 0

  const incremento:any = ((valorFinal - valorInicial) / valorInicial) * 100;

  if ( incremento === 'Infinity')
    return 0

  return Number(incremento.toFixed(1))
}

