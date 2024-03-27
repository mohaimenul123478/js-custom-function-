// custom map()


function customMap(arr, cb) {
    let newarr = []
     for (let i = 0; i < arr.length; i++) {
       let result = cb(arr[i], i, arr)
       newarr.push(result);
     }
     return newarr;
}




// examples
const numbers = [65, 44, 12, 4];

let arr2 = customMap(numbers, function(a){
    return a*10;
})

console.log(arr2); 

// result :- [ 650, 440, 120, 40 ]