import * as fs from 'fs';
import { assets_path_plublic, path_plublic } from '../../../config';

export const orden_compra = ( pedido:any ) => {
    
    const data =  pedido.cabecera

    let detallePedido:string = ''
    let total = 0

     
    pedido.detalle.forEach((element:any) => {

        
        detallePedido = detallePedido
        +`<tr>
            <td width="1%"  align="center"> ${element.row} </td>
            <td width="9%" align="center"> ${element.id_articulo}  </td>
            <td width="60%" align="center"> ${element.name}  </td>
            <td width="5%" align="center"> ${element.id_unit}  </td>
            <td width="5%" align="center"> ${element.quantity}  </td>
            <td width="10%" align="center"> ${element.price} </td>
            <td width="10%" align="center"> ${element.total} </td>
        </tr>` 
        total = Number(total) + Number(element.total)
    });


    const imagePath =  path_plublic +'/logos/'+data.Logo;
    const imageBase64 = fs.readFileSync(imagePath, 'base64');
    const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

    
    const template = `
    <style>
    * {  font-family: serif; font-size:12px }
    .tablaPedidos{ width: 100%; }
     p{
        width: 70ch; 
        border: 0px solid #ddd;
        padding: 10px;
        word-break: break-word;
    }
    </style> 
    <table class="tablaPedidos cab">
        <tr>
            <td width="45%" ><img src="${imageSrc}" width="140" height="78" alt="Logo" /></td>
            <td width="45%" > 
                <p class="titulo">Detalle Pedido</p>
                <p class="titulo_cadena"><strong>${data.Cadena}</strong></p>
             </td>
        </tr>
    </table>
    <table class="tablaPedidos">
        <tr><td width="100%" colspan="2"> <b>Direccion de Entrega: </b> ${data.Direccion} </td></tr>
        <tr>
            <td width="45%"  colspan="1"> <b># Pedido: </b> ${data.Cod_Pedido} </td>
            <td width="45%"  colspan="1"> <b>Prooveedor</b> ${data.Proveedor} </td>
        </tr>
        <tr>
            <td width="45%"  colspan="1" > <b>Fecha Pedido: </b>  ${data.Fecha_Pedido} </td>
            <td width="45%"  colspan="1" > <b>Fecha Entrega: </b> ${data.Fecha_Recepcion} </td>
        </tr>
        <tr>
            <td width="45%"  colspan="1"  > <b>Telefono:</b> ${data.Telefono} </td>
            <td width="45%"  colspan="1" >   
                <p><b>Email: </b> ${data.Email} 
                </p>
            </td>
        </tr>
    </table>      
    <table border="1" style="border-collapse: collapse;" >
     <tr>
        <td width="1%" align="center" ><b> # </td></td>
        <td width="9%" align="center"> <b>Código</td> </td>
        <td width="60%" align="center"><b> Atículo </td></td>
        <td width="10%" align="center"> <b>Unidad </td></td>
        <td width="5%" align="center"> <b>Cantidad </td></td>
        <td width="5%" align="center"> <b>Costo </td></td>
        <td width="10%" align="center"><b> Total </td></td>
    </tr>
    ${detallePedido} 
    <tr>
            <td colspan="6"  align="right">  Total </td>
            <td width="10%" align="center"> ${total.toFixed(3)} </td>
        </tr>

    </table>`

    return template

}