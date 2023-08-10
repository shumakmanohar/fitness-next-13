"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MuscleCard from "./MuscleCard";
import WorkoutCard from "./WorkoutCard";
import { BsPlayCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

const MuscleChoiceSection = ({ setActiveState }) => {
	const muscleGrps = [
		{ name: "Glutes", img: "/peach.png" },
		{ name: "Calves", img: "/leg.png" },
		{ name: "Biceps", img: "/muscle.png" },
		{ name: "Traps", img: "/cardio.png" },
	];
	return (
		<div className="sm:mt-0 w-full md:w-[448px]">
			<div className="flex flex-col items-start justify-center w-full ">
				<div className="flex items-center justify-between w-full">
					<h2 className="text-3xl font-semibold">Muscle Groups</h2>
					<BsPlayCircle
						className="h-6 w-6 cursor-pointer"
						onClick={() => setActiveState((prev) => !prev)}
					/>
				</div>
				<p className="text-md mt-4">Choose Muscle </p>
				<div className="grid gap-4 w-full  grid-cols-2">
					{muscleGrps.map(({ name, img }, _indx) => (
						<motion.div
							key={_indx}
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: _indx * 0.2 }}
						>
							<MuscleCard name={name} img={img} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

const WorkoutDisplaySection = ({ setActiveState, heroPage }) => {
	const data = [
		{ name: "Glutes", img: "/peach.png", color: "bg-red-500" },
		{ name: "Calves", img: "/leg.png", color: "bg-orange-500" },
		{ name: "Biceps", img: "/muscle.png", color: "bg-blue-500" },
		{ name: "Traps", img: "/cardio.png", color: "bg-green-500" },
	];
	return (
		<div className="w-full relative    px-4 pt-16 flex flex-col md:grid md:grid-cols-2 gap-4">
			{heroPage && (
				<BiPencil
					className="absolute top-0 h-6 w-6 right-0 cursor-pointer"
					onClick={() => setActiveState((prev) => !prev)}
				/>
			)}
			{data.map(({ name, img, color }, _indx) => (
				<WorkoutCard
					key={_indx}
					img={img}
					color={color}
					name={name.toLocaleLowerCase()}
					heroPage={heroPage}
				/>
			))}
		</div>
	);
};

export const HeroDynamic = () => {
	const [activeState, setActiveState] = useState(false);
	return activeState ? (
		<div className="lg:col-span-2 xl:col-span-3  flex items-center justify-end">
			<WorkoutDisplaySection setActiveState={setActiveState} heroPage={true} />
		</div>
	) : (
		<div className="lg:col-span-2 xl:col-span-3 flex items-center justify-end ">
			<MuscleChoiceSection setActiveState={setActiveState} />
		</div>
	);
};
