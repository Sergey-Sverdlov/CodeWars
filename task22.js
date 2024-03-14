// Обход дерева
// v - value
// c - childre
const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

const recursiveSum = (tree) => {
    let sum = 0
    tree.forEach(node => {
        sum += node.v
        if (node.hasOwnProperty('c'))
            sum += recursiveSum(node.c)
    })
    return sum
}


const iterationSum = (tree) => {
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node))
    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum
}
console.log(recursiveSum(tree))
console.log(iterationSum(tree))