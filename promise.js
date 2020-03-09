function setTimeoutAndLog(time) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function()  {
            console.log(time);
            fulfill()
        }, 1000);
    })
}

setTimeoutAndLog('a').then(function (result) {
    console.log(result);
    return setTimeoutAndLog('b')
}).then(function (result) {
    return setTimeoutAndLog('c')
}).then (function (result) {
    return setTimeoutAndLog('d')
 
});