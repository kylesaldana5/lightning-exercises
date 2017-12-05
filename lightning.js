// //  Loop through the arry 12/4/17
 
//  nameArry = [
//     { name: 'Bob', department: 'sales', title: 'sales manager',},
//     { name: 'Tina', department: 'finance', title: 'director of finance'},
//     { name: 'Randy', department: 'IT', title: 'hardware guy'},
//     { name: 'Glenda', department: 'C-suite', title: 'CEO'}
// ]

// for (let i = 0; i < nameArry.length; i++) {
//     console.log( `${nameArry[i].name} job title is ${nameArry[i].title}`)
// }

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
console.log(x)


    