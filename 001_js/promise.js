
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        var r = a + b
        if (r > 100) {
            resolve(r)
        }
        else {
            reject("Invalid data")
        }
    })
}

const square = (a) => {
    return new Promise((resolve, reject) => {
        resolve(a * a)
    })
}

const cube = (a) => {
    return new Promise((resolve, reject) => {
        resolve(a * a * a)
    })
}
// add(10,200).then(result=>{
//    return square(result)
// }).then(resp=>{
//     return cube(resp)    
// }).then(cr=>{
//     console.log(cr);

// }).catch(err=>{
//     console.log(err);  
// })

const myfun = async () => {

    try {
        const result = await add(10, 20)
        const resp = await square(result)
        const cb = await cube(resp)
        console.log(cb);
    }
    catch(err){
        console.log(err);   
    }
   
}

myfun()


