let number = 1

while (number <= 100) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Number is FizzBuzz")
    }
    else if (number % 3 === 0) {
        console.log("Number is Fizz")
    }
    else if (number % 5 === 0) {
        console.log("Number is Buzz")
    }
    else {
        console.log(`Number is : ${number}`)
    }

    number++
}










