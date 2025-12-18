const nums = [2, 8, 4, 7, 12, 87];

//console.log(nums);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = nums.filter((numsEL) => numsEL % 2 === 0 ? true : false) //uso metodo filter e arrow fun in modo super compatto

console.log(evenNums);


