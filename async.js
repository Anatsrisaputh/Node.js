// function addSync(a, b, callbackFunction) {
//     return a + b;
//   }
//   let sum = addSync(1,2);
  
//   function add(a, b, callbackFunction) {
//     callbackFunction( null, a + b );
//   }
//   let sum2;
//   add(1, 2, (err, returnValue) => {
//     sum2 = returnValue;
//   });
  

// function add(a,b, callbackFunction) {
//     callbackFunction(a * b);
// }

// add(2, 3, (result) => {
//     console.log(result)
// })

// add(2, 3, function(result) {
//     console.log(result)
// })
function max(a, b, callbackFunction) {
    if (a > b) {
    callbackFunction(a)
    } else {
        callbackFunction (b)
    }
}

max (2, 3, function (result){
   console.log(result) 
})

