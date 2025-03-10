function fizzbuzz() {
    let val = 1
    while (val <= 100) {
        if (val % 15 === 0) {
            console.log("FizzBuzz");
        } 
        else if (val % 3 === 0) {
            console.log("Fizz");
        }
        else if (val % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(val) ;
        }
        val++;
    }
}

fizzbuzz();