function getName() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Augustine')
        }, 3000)
    })
}

function getMobile(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('83473927450')
        }, 4000)
    })
}

async function getUserDetails() {
    let name = await getName()
    console.log('Name: ', name)
    let mobile = await getMobile()
    console.log('Mobile: ', mobile)
}

getUserDetails()