// Усложненный палиндром
// Внутри строки найти полиндром

const input1 = 'Babad'
const input2 = 'cbbbbd'
const input3 = 'mississippi'
const input4 = 'ac'

const longestPalindrome = function (s) {
    let maxResult = []
    let array = [...s.toLowerCase()]
    for (let i = 0, len = array.length; i < len; i++) {
        let k = 1
        let result = [array[i]]
        while (array[i - k] === array[i + k]) {
            result.unshift(array[i - k])
            result.push(array[i + k])
            k += 1
        }
        if (result.length > maxResult.length) {
            maxResult = [...result]
        }
    }

    for (let i = 0, len = array.length; i < len; i++) {
        let k = 1
        let result = [array[i]]
        while (array[i - k + 1] === array[i + k]) {
            result.unshift(array[i - k + 1])
            result.push(array[i + k])
            k += 1
        }
        if (result.length > maxResult.length) {
            maxResult = [...result]
        }
    }
    return maxResult
}



console.log(longestPalindrome(input1))
console.log(longestPalindrome(input2))
console.log(longestPalindrome(input3))
console.log(longestPalindrome(input4))