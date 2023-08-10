"use client";
import { HiChevronRight, HiMinusCircle, HiOutlinePlay } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlinePause } from "react-icons/ai";
import useFitness from "@/context/WorkoutContext";
import Link from "next/link";
import useCountdown from "@/hooks/useCountdown";

const SubWorkoutCard = ({
	name,
	duration,
	removeWorkout,
	workoutGrp,
	heroPage,
}) => {
	return (
		<div className="flex items-center gap-8 mt-4 justify-between">
			<div className="inline-flex gap-8 flex-grow">
				<p className="text-sm">{name} </p>
			</div>
			<div className="inline-flex gap-4">
				<p className="text-sm">{duration}s</p>
				{!heroPage && (
					<HiMinusCircle
						className="text-red-500 cursor-pointer"
						onClick={() => removeWorkout({ name, workoutGrp })}
					/>
				)}
			</div>
		</div>
	);
};

const WorkoutProgressBar = ({ totalDuration = 10, color }) => {
	const { time, isRunning, startTimer, pauseTimer, resetTimer, progress } =
		useCountdown(totalDuration);
	console.log(color);
	return (
		<div className="w-full pb-4 ">
			{/* Progress Bar */}
			<div className="flex items-center justify-between mb-2">
				{isRunning ? (
					<AiOutlinePause
						onClick={() => pauseTimer()}
						className="w-4 h-4  cursor-pointer"
					/>
				) : (
					<HiOutlinePlay
						onClick={() => startTimer()}
						className="w-6 h-6 cursor-pointer "
					/>
				)}

				<p className="text-sm mb-1 text-left font-bold">
					{Math.round(progress)}%
				</p>
			</div>
			<div className="relative">
				<div
					style={{ width: `${progress}%` }}
					className={`absolute top-0 transition-all left-0  h-1 rounded-r-full rounded-l-full ${color}`}
				></div>
				<div className="w-full h-1 rounded-r-full rounded-l-full bg-gray-100/50"></div>
			</div>
		</div>
	);
};

const WorkoutCard = ({ name: workoutGrp, img, heroPage = false, color }) => {
	const { workouts, removeWorkout } = useFitness();

	let totalDuration = workouts[workoutGrp].reduce(
		(total, workout) => total + workout.duration,
		0
	);
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ ease: "easeOut", duration: 0.8 }}
			className="w-full bg-black  text-white flex  gap-4 rounded-lg md:max-w-md md:mx-auto"
		>
			<div className="bg-white p-4 py-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
				<div className="relative w-14 h-14 ">
					<Image src={img} fill={true} alt="img" className="" />
				</div>
			</div>
			<div className="flex-1  pt-4 pr-4 flex flex-col">
				<div className="flex items-center justify-between">
					<h2 className="text-xl capitalize">{workoutGrp}</h2>
					<Link href={`/${workoutGrp}`}>
						<HiChevronRight className="h-6 w-6" />
					</Link>
				</div>

				<div className="flex flex-col gap-2 pb-4">
					{workouts[workoutGrp].map(({ name, duration }, _indx) => (
						<SubWorkoutCard
							key={_indx}
							name={name}
							heroPage={heroPage}
							duration={duration}
							workoutGrp={workoutGrp}
							removeWorkout={removeWorkout}
						/>
					))}
				</div>

				{heroPage && (
					<div className="">
						<WorkoutProgressBar totalDuration={totalDuration} color={color} />
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default WorkoutCard;
