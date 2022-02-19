function oddOrNot(num) {
	let lastDigit = num % 10;
	let even = num % 2;

	if (num === lastDigit) {
		if (even === 0) {
			return false;
		}
		return true;
	}

	if (even === 0) {
		return false;
	}

    let recNum = (num - lastDigit) / 10;

	return oddOrNot(recNum);
}