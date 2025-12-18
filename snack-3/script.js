const numbers = [2, 8, 4, 7, 2, 87];

//console.log(numbers);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numbersPlusOne = numbers.map((numEl) => { //uso il metodo map e ritorno il numero copiato + 1 
    
    return (numEl + 1);

})

console.log(numbersPlusOne);
