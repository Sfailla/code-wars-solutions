const cache = {};
let counter = 0;

function bruteForceDetected(loginRequest) {
	const MAX_SUCCESSFUL_ATTEMPTS = 20;
	const ip = loginRequest.sourceIP;
	const isSuccessful = loginRequest.successful === true;
}

// var safeRequest = { sourceIP: '216.58.209.67', successful: true };

// console.log(bruteForceDetected(safeRequest), false);

// var bruteForce = { sourceIP: '87.98.231.40', successful: false };

// for (var i = 0; i < 19; i++) {
// 	console.log(bruteForceDetected(bruteForce), false);
// }

// // on the 21th request the attack should be detected
// console.log(bruteForceDetected(bruteForce), true);

var bruteForce = { sourceIP: '87.98.231.40', successful: false };
console.log(bruteForceDetected(bruteForce));
console.log(bruteForceDetected(bruteForce));
console.log(bruteForceDetected(bruteForce));

// var safeRequest = { sourceIP: '216.58.209.67', successful: true };
// console.log(bruteForceDetected(safeRequest), false);
