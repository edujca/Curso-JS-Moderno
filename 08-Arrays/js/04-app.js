const meses = ["enero", 'febrero','marzo','abril','mayo','junio'];

console.log(meses);

//Pese a estar declarado en const, los valores de un array SÍ se pueden modificar, igual que en objetos no sellados

meses[6] = 'julio';
meses[0] = 'agosto'; //sustituye enero por agosto

console.log(meses);

