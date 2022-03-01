// Display full name
// Arrays and for loop
const names = ['anna', 'susy', 'bob']
const lastNames = ['shakeandbake']
let fullName = []
const namesLength = names.length;
const lastNamesLength = lastNames.length;

// for loop
for (let i = 0; i < namesLength; i++) {
    // step 1
    // fullName[i] = names[i] + ' ' + lastNames[0]

    // step 2
    fullName.push(`${names[i]} ${lastNames}`)
}

console.log(fullName);