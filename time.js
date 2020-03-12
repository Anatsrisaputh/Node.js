// setTimeout(()=>{
//     console.log('a')
//     setTimeout(()=>{
//         console.log('b')
//         setTimeout(()=>{
//             console.log('c')
//             setTimeout(()=>{
//                 console.log('d')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// setTimeout(function(){}, 1000)

function a(yes,no) {
    console.log(no);
    console.log(yes);
}
a("ตัวแรก","ตัวที่สอง")

function b(first, second, third) {

    console.log(first)
    console.log(third)
    console.log(second)
}

b(5, 2,8 )