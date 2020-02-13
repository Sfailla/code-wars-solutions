// convert callback function to promise

function getData(callback, errorCallback) {
	try {
		//do something
		callback();
	} catch (e) {
		errorCallback(e);
	}
}

const data1 = getData(
	result => console.log(result),
	error => console.log(error)
);

function getDataAsync() {
	return new Promise((resolve, reject) => {
		getData(resolve, reject);
	});
}

const data2 = getDataAsync()
	.then(data => console.log(data))
	.catch(err => console.log(err));
