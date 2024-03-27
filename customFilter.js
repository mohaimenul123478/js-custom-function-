// custom filter()


function customFilter(arr, cb) {
    let  newarry = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newarry.push(arr[i])
        }
    }
    return newarry;
}

 // examples

let number = [12,34,5,67,12,3];

let x = customFilter(number, function(a) {
   return a>30;
});
console.log(x);
// result :- [ 34, 67 ]