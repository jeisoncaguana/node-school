 
export const getCastDate = ( fechaString:string ) => {

    const fecha = new Date(fechaString);

 
// Extraer y formatear los componentes de la fecha
const anio = fecha.getFullYear();
const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11, así que sumamos 1
const dia = fecha.getDate().toString().padStart(2, '0');
// const horas = fecha.getHours().toString().padStart(2, '0');
// const minutos = fecha.getMinutes().toString().padStart(2, '0');
// const segundos = fecha.getSeconds().toString().padStart(2, '0');

return `${anio}-${mes}-${dia} `
 

}