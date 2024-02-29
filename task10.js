// Проверка на палиндром предложения
"use strict"

const palindrome = (str) => {
    let strArray = [...str.toLowerCase()]
    let strWithoutSpace = strArray.filter(el => el !== ' ')
    return strWithoutSpace.join('') === strWithoutSpace.reverse().join('')
}

console.log(palindrome('А роза     упала на лапу Азора')) //true