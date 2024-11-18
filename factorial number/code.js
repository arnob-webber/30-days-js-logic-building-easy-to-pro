function factorialNumber (x) {
    let numberY = 1;
    for (let a = 2; a <= x; a++)
        numberY *= a;
return numberY

}

console.log(

    factorialNumber(3) // 1*2*3 = 6
)


// fatocila mean this process continues for any number you choose, multiplying all numbers from 1 up to the number you chose.