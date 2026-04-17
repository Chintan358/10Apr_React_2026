// const add = (a,b)=>{
//     return a+b
// }

// const square = (a)=>{
//     console.log(a*a); 
// }

// k = add(10,20)
// square(k)

const add = (a, b, callback) => {
    callback(a + b)
}

const square = (a, callback) => {
    callback(a * a);
}

const cube = (k, callback) => {
    callback(k * k * k)
}

add(10, 20, (result) => {
    square(result, (sq) => {
        cube(sq, (c) => {
            console.log(c);
        });
    });
})