function compute(a, b) {
    let arr = a.toString().split(' ')
    arr.push(b)
    return arr.sort((e1, e2) => {
        return e1 - e2
    })
}

(function () {
    let n1 = prompt()
    let n2 = prompt()
    let n3 = prompt()
    console.log(compute(n2, n3).map(Number))
})()



// function compute(a, b, c) {
//     b.on(ar => {
//         let arr = ar.toString().split(' ')
//     })
//     c.on(ar => {
//         arr.push(ar)
//     })
//     console.log(arr.sort((e1, e2) => {
//         return e1 - e2
//     }))
// }
// const readline = require('readline')
// let n1 = readline.createInterface(process.stdin, process.stdout)
// let n2 = readline.createInterface(process.stdin, process.stdout)
// let n3 = readline.createInterface(process.stdin, process.stdout)

// compute(n1, n2, n3)

function compute(a, b) {
    let arr = a.toString().split(' ')
    arr.push(b)
    return arr.sort((e1, e2) => {
        return e1 - e2
    })
}

(function () {
    let n1 = prompt()
    let n2 = prompt()
    let n3 = prompt()
    console.log(compute(n2, n3).map(Number).toString())
})()


