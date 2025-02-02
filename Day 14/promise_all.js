function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Augustine')
        }, 3000)
    })
}

function getMobile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('8904388958')
        }, 4000)
    })
}

Promise.all([getName(), getMobile()]).then((result) => {
    console.log(result)
})