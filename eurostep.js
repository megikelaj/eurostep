function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }
        return result;
    }
}


function logNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Eurostep");
        } else if (i % 3 === 0) {
            console.log("Euro");
        } else if (i % 5 === 0) {
            console.log("Step");
        } else {
            console.log(i);
        }
    }
}



function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
