const anagram = (str, word) => {
    let stringArray = str.toLowerCase().split('')
    let wordArray = word.toLowerCase().split('')
    for (let elem of wordArray) {
        let countElemStr = stringArray.filter(x => x === elem).length
        let countElemWord = wordArray.filter(x => x === elem).length
        if (countElemWord > countElemStr)
            return false
    }
    return true
}

console.log(anagram("HELLO", "LHlE"))
// Анаграмма. Проверить, можно ли из второго слова составить первое