// Количество гласных в строке

const findVowels = (str) => {
    const Vowels = 'aoeiuy'
    const countVowels = [...str].reduce((acc, word) => {
        if (Vowels.includes(word.toLowerCase()))
            acc += 1
        return acc
    }, 0)
    return countVowels
}

console.log(findVowels('dsfsdfeyods'))