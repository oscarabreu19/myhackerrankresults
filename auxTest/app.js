function filterNumbersFromArray(arr: any[]): void {
    // Write the code that goes here
    // Esto es para la segunda rama
    const exRegex = new RegExp(`[[0-9]]`,'gi');
    arr = [...arr.match(exRegex)];
}
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  console.log(arr);