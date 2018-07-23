// Output

// Name and Age print
// inrement Age
// split up Name


var people = [{
        name: 'Mustak',
        age: 22
    },
    {
        name: 'Nayem vai',
        age: 22
    },
    {
        name: 'Shuvo',
        age: 23
    }
]


function DoWhateverYouWant(people, cb) {
    cb(people)
}

DoWhateverYouWant(people, function (people) {
    people.forEach(element => {
        console.log(element.name + "Age is = " + element.age);
    });
})

DoWhateverYouWant(people, function (people) {
    people.forEach(element => {
        element.age = element.age + 2

        console.log("Updated Age of " + element.name + " = " + element.age);

    })
})

DoWhateverYouWant(people, function (people) {
    people.forEach(element => {
        console.log(element.name.split('').join("-"));
    });
})