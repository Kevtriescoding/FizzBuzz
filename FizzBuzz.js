const numbers = Array.from(Array(101).keys())
for (let i = 0; i < numbers.length; i++) {
    const isDivisivleByFive = i % 5 === 0
    // console.log(i, isDivisivleByFive)
    const isDivisivleByThree = i % 3 === 0
    // console.log(i, isDivisivleByThree)
    const isDivisivleByFour = i % 4 === 0
    //console.log(i, isDivisivleByFour)
    if (isDivisivleByFive && isDivisivleByThree) { console.log("fizzBuzz", i) }
    else if (isDivisivleByFive) { console.log("Buzz", i) }
    else if (isDivisivleByThree) { console.log("Fizz", i) }
}