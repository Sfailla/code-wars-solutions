function humanReadable(seconds) {
	const hours = Math.floor(seconds / 60 / 60);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 3600 - minutes * 60;

	const time = { hours, minutes, secs };

	const timeFormatter = time => {
		let { hours, minutes, secs } = time;

		if (hours < 10) hours = `0${hours}`;
		if (minutes < 10) minutes = `0${minutes}`;
		if (secs < 10) secs = `0${secs}`;

		return `${hours}:${minutes}:${secs}`;
	};
	return timeFormatter(time);
}

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
