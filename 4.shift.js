function shift(arr, shiftedArr = [], i = 1) {
	if (typeof arr[i] === "undefined") {
		return shiftedArr;
	}

	shiftedArr.push(arr[i]);
	i++;
	return shift(arr, shiftedArr, i);
}