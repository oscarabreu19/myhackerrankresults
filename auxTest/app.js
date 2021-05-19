// Agrega un primer comentario
// Se elimina el segundo comentario de la histora sin agregar un commit nuevo
function filterNumbersFromArray(arr: any[]): void {
    // Write the code that goes here
    const exRegex = new RegExp(`[[0-9]]`,'gi');
    arr = [...arr.match(exRegex)];
}
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  console.log(arr);