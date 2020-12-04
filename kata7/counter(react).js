import React from 'react';

const colors = [
	'red',
	'green',
	'blue',
	'pink',
	'yellow',
	'gray',
	'white',
	'black',
	'almond',
	'brown'
];

export const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * 10);
	return colors[randomIndex];
};

const color = 'red'; // should be replaced with some random one in your implementation

export default function Counter() {
	const [ count, setCount ] = React.useState(0);
	const [ color, setColor ] = React.useState(null);

	const increment = () => setCount(prevState => prevState + 1);
	const decrement = () => setCount(prevState => prevState - 1);
	const reset = () => setCount(0);

	React.useEffect(
		() => {
			setColor(getRandomColor());
		},
		[ count ]
	);

	return (
		<div style={{ borderTop: `10px solid ${color}` }}>
			<div className="value">{count}</div>
			<button className="increment" onClick={increment}>
				+
			</button>
			<button className="decrement" onClick={decrement}>
				-
			</button>
			<button className="reset" onClick={reset}>
				reset
			</button>
		</div>
	);
}
