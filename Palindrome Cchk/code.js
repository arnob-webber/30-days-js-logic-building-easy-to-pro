function itsPalinrome(str) {
    
    let makePalindromeWithReverse = str.split('').reverse().join('')

    return str === makePalindromeWithReverse;
}


console.log(itsPalinrome("dad"))
