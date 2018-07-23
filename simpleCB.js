// Output

// MUSTAK HRIDOY
// mustak hridoy 
// mustak Total length = 6


function DoWhateverYouWant(name, cb) {
    cb(name)
}

DoWhateverYouWant('mustak hridoy', function (name) {
    var temp = name.toUpperCase();
    console.log("Upper Case = " + temp);
})


DoWhateverYouWant('mustak hridoy', function (name) {
    var temp = name.toLowerCase();
    console.log("Lower Case = " + temp);
})

DoWhateverYouWant('mustak', function (name) {
    var temp = name.length;
    console.log(name + 'Total Length = ' + temp);
})