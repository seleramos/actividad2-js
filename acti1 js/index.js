for (let i = 0; i < 11; i++) {
    // Esto es el bucle
    console.log(i)
}



let i = 0;
let max = 11;
while (i < max) {
    console.log(i);
    i++;
}



let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    let j = 10;
    console.log(lista[i]);
    console.log(j);

    if (lista[i] > 5) {
        break;
    }
}


// Cuál es el ámbito de un bucle
console.log(k);
console.log(i);
console.log(j);