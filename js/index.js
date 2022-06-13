

// const numbers = [2, 3, 8, 18]

// const numbersSum = function(arr){

//     let son = 0

//     for ( let num of numbers){

//         son += num
//     }

//     return son
// }

// console.log(numbersSum(numbers));


// const abu = {
// name: "abu",
// friends: ["azim", "ibrohim"]
// }

// console.log(``);

const elform = document.querySelector(".form")

const elinput = document.querySelector(".input")

elform.addEventListener('submit', function(evt){
evt.preventDefault()

const inputvalue = elinput.value

const todo = {
    name: inputvalue
}

todos.push(todo)

console.log(todos);

})
