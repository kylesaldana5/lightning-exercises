// //  Loop through the arry 12/4/17
 
 nameArry = [
    { name: 'Bob', department: 'sales', title: 'sales manager',},
    { name: 'Tina', department: 'finance', title: 'director of finance'},
    { name: 'Randy', department: 'IT', title: 'hardware guy'},
    { name: 'Glenda', department: 'C-suite', title: 'CEO'}
]

for (let i = 0; i < nameArry.length; i++) {
    console.log( `${nameArry[i].name} job title is ${nameArry[i].title}`)
}

// Make an object with at least three properties.One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call.hasOwnProperty() on the new object, passing in an inherited property as an argument.Does it return true or false ?
//     Do it again, but this time pass in one of the properties you added to the new object.True or false ?  12/5/17

let band = {
    name: "cool name",
    president: "trey",
    products: "jams",
}
  
let phish = Object.create(band);
    
 phish.keys = "Page";
 phish.bass = "Mike";


let x = Object.create(phish)


// Loop over every item in this 
// array[45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark” }, “JS”, “rockstar”]
// and return a new array that contains only strings.and log out the result. 12/6/17

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark" }, "JS", "rockstar"].filter((item)=>{return typeof(item) === "string"});


// 1/2/18
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fav_demo = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 50 && ages[i] > 17) fav_demo.push(ages[i]);
    
}

favorite_demo = [];
ages.forEach(bigger => {
    if (ages < 50 && ages > 17) favorite_demo.push(ages);
});

let most_favorite_demo = ages.filter( (large) => large < 50 && large > 17 );

// Exercise 2

hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life

let meaning = "meaning of life"

hitchhikers_guide.random_facts.ultimate_answer[meaning]

// Excercise 3

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

yoda_quote.map( (word) =>{
    if (word === "the")
    word.slice(0,1).toUpperCase() + word.slice(1)
    if (word === "teacher") 
        word = word + ","
    return word

}).join(" ")

//  1/4/18
// Choose a loop method of your choice to get this result from this array: expected result: [3, 5, 7, 9, 11, 13]
let nums = [1, 2, 3, 4, "5", 6, "7"]

let newNums = [];
for (let i = 0; i < nums.length-1; i++) {
    newNums.push(+nums[i] + +nums[i + 1]);
    
}
// console.log(newNums)

// 1/8/17
// Loop through this object and add each member object's key as an ID. Log the results.
let customers = {
    active: {
        a87b6345: {
            name: "Gary Harrison",
            age: 23,
            member_level: "gold"
        },
        b345hy66: {
            name: "Harry Garrison",
            age: 34,
            member_level: "silver"
        },
        nh56yht8: {
            name: "Mary Terryson",
            age: 78,
            member_level: "platinum"
        },
        j677yd456: {
            name: "Barry Sonnyman",
            age: 44,
            member_level: "gold"
        }
    },
    inactive: {
        ur56tfgt: {
            name: "Barb Justice",
            age: 56,
            member_level: "none"
        },
        d56gt6: {
            name: "Jane L'eggo",
            age: 11,
            member_level: "none"
        }
    }
}

for(let status in customers){
    let keys = Object.keys(customers[status])
    keys.forEach((key) => {
        customers[status][key].id = key;
    });
};
console.log('',customers );
