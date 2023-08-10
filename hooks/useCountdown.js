import React, { useEffect, useState } from "react";

const useCountdown = (initialTime) => {
	const [time, setTime] = useState(initialTime);
	const [isRunning, setIsRunning] = useState(false);
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				if (time > 0) {
					setTime((prevTime) => prevTime - 1);
					setProgress(((initialTime - (time - 1)) / initialTime) * 100);
				} else {
					pauseTimer();
				}
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isRunning, time]);

	const startTimer = () => {
		setIsRunning(true);
	};

	const pauseTimer = () => {
		setIsRunning(false);
	};

	const resetTimer = () => {
		pauseTimer();
		setTime(initialTime);
	};

	return {
		time,
		isRunning,
		startTimer,
		pauseTimer,
		resetTimer,
		progress,
	};
};

export default useCountdown;
