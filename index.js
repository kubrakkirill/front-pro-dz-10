const number = prompt("Enter a number:");

if (isNaN(number)) {
    alert("Please enter a valid number");
} else {
    const degree = prompt("Enter a degree (integer):");

    if (isNaN(degree) || !Number.isInteger(+degree)) {
        alert("Please enter a valid integer degree");
    } else {
        function pow(number, degree) {
            if (degree === 0) {
                return 1;
            } else if (degree === 1) {
                return number;
            } else if (degree < 0) {
                return 1 / pow(number, -degree);
            } else {
                return number * pow(number, degree - 1);
            }
        }

        alert(`${number}^${degree} = ${pow(+number, +degree)}`);
    }
}

