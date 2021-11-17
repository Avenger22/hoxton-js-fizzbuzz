let number = 1

while (number <= 1000) { // ONLY 105x1, 105x2 etc... IS FIZZBUZFISH AND ONLY 945 IS FIZZBUZZFISHBUS
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0 && number % 9 === 0) {
        console.log("Number is FizzBuzzFishBus")
    }
    else if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
        console.log("Number is FizzBuzzFish")
    }

    else if (number % 3 === 0 && number % 5 === 0) {
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










