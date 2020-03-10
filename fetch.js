const fs = require('fs')

fetch('homework2.json').then(response => {
    console.log(response);
})



function fetch(path) {
    return new Promise(function (resolve, reject) {
        const response = fs.readFileSync(path,'utf-8')
        resolve(response)
    })
}

