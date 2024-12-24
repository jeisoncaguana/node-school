import { VERSION } from '../config/index.config'
 
export const getCurrentDate = () => {
    const d = new Date()
    const curr_date  = d.getDate()
    const curr_month = d.getMonth()+1
    const curr_year  = d.getFullYear()
    return String(`${curr_date}-${curr_month}-${curr_year}`)
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
 