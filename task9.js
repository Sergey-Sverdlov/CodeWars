"use strict"
let s1 = '[()]' // true
let s2 = '{[[]{}]}()()' // true
let s3 = '([)]' //false

const isValid = (s) => {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
            stack.push(s[i])

        if (s[i] === ')')
            if (stack[stack.length - 1] === '(')
                stack.pop()

        if (s[i] === ']')
            if (stack[stack.length - 1] === '[')
                stack.pop()

        if (s[i] === '}')
            if (stack[stack.length - 1] === '{')
                stack.pop()
    }
    return stack.length === 0
}

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))



// Правильность скобок