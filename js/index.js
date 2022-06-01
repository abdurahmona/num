

const numbers = [2, 3, 8, 18]

const numbersSum = function(arr){

    let son = 0

    for ( let num of numbers){

        son += num
    }

    return son
}

console.log(numbersSum(numbers));