function minimumPositive(arr, index = +Infinity) {
	let currentNum = arr[arr.length - 1];
	if (currentNum >= 0 && currentNum < index) {
		index = currentNum;
	}
	if (arr.length === 1) {
		if (index === +Infinity) {
			return -1;
		}
		return index;
	}
	arr.pop();
	return minimumPositive(arr, index);
}