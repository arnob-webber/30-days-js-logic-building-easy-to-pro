let Duplicates = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 8, 7, 9]


let noDupli = new Set(Duplicates)

let arrayForNoDupli = [...noDupli]

// if we dont do this then we will get the value but not in the array from 

console.log(arrayForNoDupli)