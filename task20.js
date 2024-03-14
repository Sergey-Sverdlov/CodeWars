// Поиск в ширину графа

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

const breadthSearch = (graph, start, end) => {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        console.log(queue)
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }

        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))