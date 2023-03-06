let result = 0;
​/*La variable result se usa de manera global porque
permite utilizarse en todas las funciones, de manera que 
solo cuando se llame a la funcion la variable se utiliza */

function add(x, y) {
  result = x + y;
}
​
function subtract(x, y) {
  result = x - y;
}
​
/*Para no depender de la variable global se puede crear 
una variable dentro de cada funcion */
function accumulate(x) {
    
    let sumatoria = 0;
    sumatoria += x;
}
​
add(5, 10);
console.log(result);
accumulate(6);
subtract(6, 12);
console.log(result);