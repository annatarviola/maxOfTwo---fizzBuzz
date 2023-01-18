//CHALLENGE: MAX OF TWO

let x = 1
let y = 2

// Write your code below this line.

if (x > y) {
    console.log(x)
}  else if (y > x) {
    console.log(y)
}  else {
    console.log ("The values are identical")
}

//CHALLENGE: FIZZ BUZZ

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    } 
}