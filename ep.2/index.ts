function add(a: number, b: number) {
    return a + b 
}
console.log(add(5, 8))

function minus(a: number, b: number) {  
    return a - b 
}
console.log(minus(6, 6))

function multiply(a: number, b: number, c: number, d:number) {
    return a * b * c * d
}
console.log(multiply(8, 9, 1, 5))


function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return 'เกรด D'
    } else if (score < 70) {
        return 'เกรด C'
    } else if (score < 80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }

}
console.log(grade(2,30,50))