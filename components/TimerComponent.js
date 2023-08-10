import React, { useState, useEffect } from "react";

function TimerComponent() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => {
			clearInterval(interval); // This is the cleanup function to clear the interval
		};
	}, []); // Empty dependency array means this effect only runs once (on mount)

	return (
		<div>
			<p>Count: {count}</p>
		</div>
	);
}

export default TimerComponent;
