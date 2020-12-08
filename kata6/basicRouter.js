class Router {
	constructor() {
		this.obj = {};
	}

	bind(path, method, cb) {
		this.obj[path + method] = cb();
	}

	runRequest(path, method) {
		if (path + method in this.obj) {
			return this.obj[path + method];
		}
		return '404: Not Found';
	}
}

var router = new Router();

// router.bind('/hello', 'GET', function() {
// 	return 'hello world';
// });
// router.bind('/login', 'GET', function() {
// 	return 'Please log-in.';
// });

// console.log(router.runRequest('/hello', 'GET'), 'hello world');
// console.log(router.runRequest('/login', 'GET'), 'Please log-in.');

// router.bind('/page', 'GET', function() {
// 	return 'First binding.';
// });
// router.bind('/page', 'GET', function() {
// 	return 'Modified binding.';
// });

// console.log(router.runRequest('/page', 'GET'), 'Modified binding.');

router.bind('/login', 'GET', function() {
	return 'Please log-in.';
});
router.bind('/login', 'POST', function() {
	return 'Logging-in.';
});
router.bind('/login', 'DELETE', function() {
	return 'Deleting log-in';
});
router.bind('/login', 'PUT', function() {
	return 'Updating log-in.';
});

console.log(router.runRequest('/login', 'GET'), 'Please log-in.');
console.log(router.runRequest('/login', 'POST'), 'Logging-in.');
console.log(router.runRequest('/login', 'DELETE'), 'Deleting log-in');
console.log(router.runRequest('/login', 'PUT'), 'Updating log-in.');
