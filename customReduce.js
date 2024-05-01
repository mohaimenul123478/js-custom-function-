// //  custom reduce()

function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array);
    }
    
    return accumulator;

    
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const sum = customReduce(myArray, function(acc, currentValue){
    return acc + currentValue;
});


console.log(sum);

    

    

    

