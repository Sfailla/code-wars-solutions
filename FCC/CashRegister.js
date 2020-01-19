function checkCashRegister(price, cash, cid) {
	var change;

	function drawerStatus(status) {
		if (status === 'open') {
			return 'OPEN';
		} else if (status === 'closed') {
			return 'CLOSED';
		} else if (status === 'insufficient') {
			return 'INSUFFICIENT_FUNDS';
		}
	}

	let map = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1.0,
		FIVE: 5.0,
		TEN: 10.0,
		TWENTY: 60.0,
		'ONE HUNDRED': 100.0
	};

	let obj = {
		status: drawerStatus('insufficient'),
		change: []
	};

	let changeDue = cash - price;

	for (let key in map) {
	}

	if (cash < price) {
		return obj;
	} else if (cid === changeDue) {
		obj = {
			status: drawerStatus('closed'),
			change: [ changeDue ]
		};
	}

	// Here is your change, ma'am.
	return obj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
	checkCashRegister(19.5, 20, [
		[ 'PENNY', 1.01 ],
		[ 'NICKEL', 2.05 ],
		[ 'DIME', 3.1 ],
		[ 'QUARTER', 4.25 ],
		[ 'ONE', 90 ],
		[ 'FIVE', 55 ],
		[ 'TEN', 20 ],
		[ 'TWENTY', 60 ],
		[ 'ONE HUNDRED', 100 ]
	]),
	{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }
);

// console.log(
// 	checkCashRegister(19.5, 20, [
// 		[ 'PENNY', 1.01 ],
// 		[ 'NICKEL', 2.05 ],
// 		[ 'DIME', 3.1 ],
// 		[ 'QUARTER', 4.25 ],
// 		[ 'ONE', 90 ],
// 		[ 'FIVE', 55 ],
// 		[ 'TEN', 20 ],
// 		[ 'TWENTY', 60 ],
// 		[ 'ONE HUNDRED', 100 ]
// 	]),
// 	{}
// );

// console.log(
// 	checkCashRegister(3.26, 100, [
// 		[ 'PENNY', 1.01 ],
// 		[ 'NICKEL', 2.05 ],
// 		[ 'DIME', 3.1 ],
// 		[ 'QUARTER', 4.25 ],
// 		[ 'ONE', 90 ],
// 		[ 'FIVE', 55 ],
// 		[ 'TEN', 20 ],
// 		[ 'TWENTY', 60 ],
// 		[ 'ONE HUNDRED', 100 ]
// 	]),
// 	{
// 		status: 'OPEN',
// 		change: [
// 			[ 'TWENTY', 60 ],
// 			[ 'TEN', 20 ],
// 			[ 'FIVE', 15 ],
// 			[ 'ONE', 1 ],
// 			[ 'QUARTER', 0.5 ],
// 			[ 'DIME', 0.2 ],
// 			[ 'PENNY', 0.04 ]
// 		]
// 	}
// );
