function countVowel(CNTVL) {
    let vowels = "aeiou"
    let count = 0;

    for (let char of CNTVL) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    console.log(count) 
}

countVowel("oranges")