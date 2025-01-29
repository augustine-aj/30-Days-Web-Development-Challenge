function add(num1, num2){
    return new Promise((resolve, reject) =>{
        if (num1 == 0){
            reject('Number 1 is zero..')
        }
        resolve(num1 + num2)
    })
}

function multiply(num1, num2){
    return new Promise((resolve) => {
        resolve(num1*num2)
    })
}

function division(num1, num2){
    return new Promise((resolve) => {
        resolve(num1/num2)
    })
}

add(10, 20).then((sum) =>{
    console.log(sum)
    return multiply(sum, sum)
}).then((product) => {
    console.log(product)
    return(product, 10)
}).then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})