"use client";

import { useThemeContext } from "@/context/Theme";
import useFitness from "@/context/WorkoutContext";
import { useState } from "react";
import { AiOutlineArrowLeft, AiFillStar } from "react-icons/ai";
import { HiMinusCircle, HiBadgeCheck, HiPlusCircle } from "react-icons/hi";

const WorkoutInfoCard = ({ name, difficulty, equipment, workoutGrp }) => {
	const [duration, setDuration] = useState("");
	const { workouts, editWorkout, addWorkout, removeWorkout } = useFitness();

	console.log(workouts);
	const submitData = () => {
		if (parseInt(duration) >= 1) {
			console.log({
				workoutGrp,
				name,
				duration,
				workouts,
				editWorkout,
				addWorkout,
				removeWorkout,
			});
			addWorkout({ name, workoutGrp, duration: parseInt(duration) });
			setDuration("");
		}
	};
	const handleChange = (e) => {
		console.log(e.target.validity.valid);
		setDuration((prev) => (e.target.validity.valid ? e.target.value : ""));
	};
	return (
		<div className="md:w-5/6 w-full  bg-black text-white  flex flex-col gap-4 rounded-lg p-4 shadow-md">
			<h3 className="text-xl capitalize">{name}</h3>
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-1">
					<p className="opacity-60">Difficulty</p>
					<div className="flex">
						{difficulty == "beginner" ? (
							<AiFillStar className="text-green-500" />
						) : (
							<AiFillStar className="text-yellow-500" />
						)}
					</div>
				</div>
				<div className="flex items-center gap-2">
					<p className="opacity-60">Equipment</p>
					<div className="flex">
						{equipment == "None" ? (
							<HiMinusCircle className="text-red-500" />
						) : (
							<HiBadgeCheck className="text-green-500" />
						)}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<input
					type="text"
					className="w-1/2 bg-transparent border-b-2 text-center outline-none opacity-90"
					placeholder="30 seconds"
					pattern="[0-9]*"
					value={duration}
					onChange={handleChange}
				/>
				<HiPlusCircle className="h-6 w-6 cursor-pointer" onClick={submitData} />
			</div>
		</div>
	);
};

export default WorkoutInfoCard;
