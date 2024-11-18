function theFibonacciNumber(a) {
    
    if (a === 0)
        return 0;

    if (a === 1)
        return 1;

    return theFibonacciNumber(a - 1) + theFibonacciNumber(a - 2);
}

console.log(theFibonacciNumber(4))



