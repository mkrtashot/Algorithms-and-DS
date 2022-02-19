function ascending(arr, index = 0) {
	let currentNum = arr[0];
	let nextNum = arr[1];

	if (typeof (currentNum) !== "undefined" && typeof (nextNum) !== "undefined") {
		if (currentNum <= nextNum) {
			index++;
			arr.shift();
			return ascending(arr, index);
		}
		return ++index;
	}

	return -1;
}