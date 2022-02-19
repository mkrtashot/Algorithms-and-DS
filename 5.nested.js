function nested(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "object") {
			newArr = newArr.concat(nested(arr[i]));
		} else {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}
