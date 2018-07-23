var array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

var mappedArray = array.map((number, index) => {
    console.log(`Index = ${index} Updated number = ${number + 2}`)
})

// ------------------------------------------------- 


var newArray = array;

function myMap(newArray, cb) {

    console.log(newArray);

    var Data = []

    newArray.forEach((element, index, arr) => {

        // console.log(cb(element));

        Data.push(cb(element, index, arr))
    });


    return Data
}

var testMap = myMap(newArray, function (value, index) {

    //console.log(index);

    return value + 5
})

// OUTPUT
console.log(newArray);

//After add 5

console.log(testMap);