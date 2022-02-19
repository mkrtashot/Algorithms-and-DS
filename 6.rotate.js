function rotate(arr, N) {
	if (N > 0) {
		N--;
		let shift = arr.shift();
		arr.push(shift);
	}

	if (N < 0) {
		N++;
		let pop = arr.pop();
		arr.unshift(pop);
	}

	if (N === 0) {
		return arr;
	}

	return rotate(arr, N);
}
