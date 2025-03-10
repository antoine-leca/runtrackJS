function tri(numbers, order) {
    if (order === "desc") {
        console.log(numbers.sort((a, b) => b - a));
    } else if (order === "asc") {
        console.log(numbers.sort((a, b) => a - b));
    } else if (order === "none") {
        console.log(numbers);
    }
}

let numbers = [23, 45, 67, 12, 89, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 0];
tri(numbers, "none");
tri(numbers, "desc");
tri(numbers, "asc");