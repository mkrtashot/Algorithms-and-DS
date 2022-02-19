function calc(num) {
	let sum = 0;
	while (num) {
		let lastDigit = num % 10;
		num = (num - lastDigit) / 10;

		sum += lastDigit;
	}

	if (sum > 9) {
		sum = calc(sum);
	} 
    return sum;
}