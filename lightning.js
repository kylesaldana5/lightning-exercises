//  Loop through the arry 12/4/17
 
 nameArry = [
    { name: 'Bob', department: 'sales', title: 'sales manager',},
    { name: 'Tina', department: 'finance', title: 'director of finance'},
    { name: 'Randy', department: 'IT', title: 'hardware guy'},
    { name: 'Glenda', department: 'C-suite', title: 'CEO'}
]

for (let i = 0; i < nameArry.length; i++) {
    console.log('${nameArry[i].name} job title is ${nameArry.title}')
}
