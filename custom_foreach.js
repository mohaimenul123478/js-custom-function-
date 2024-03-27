// custom foreach function 



function customForEach(array, callback) {
   for (let i = 0; i < array.length; i++) {
     callback(array[i], i, array);
   }
 }
 

 const numbers = [1, 2, 3, 4, 5];
 
  let result = customForEach(numbers, function(a,b,c){
    console.log(a);
  })
