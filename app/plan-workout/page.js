import WorkoutCard from "@/components/WorkoutCard";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Page = () => {
	const data = [
		{ name: "glutes", img: "/peach.png" },
		{ name: "calves", img: "/leg.png" },
		{ name: "biceps", img: "/muscle.png" },
		{ name: "traps", img: "/cardio.png" },
	];
	return (
		<div className="bg-image">
			<div className="max-w-[1500px] mx-auto min-h-screen   relative">
				{/* Title */}

				<Link
					href={"/"}
					className=" text-white flex pl-8 pt-16 gap-4 items-center mt-18 flex-col md:flex-row"
				>
					<div className="h-12 w-12 bg-black flex items-center justify-center rounded-full self-start">
						<AiOutlineArrowLeft className="" />
					</div>
					<h1 className="text-4xl uppercase font-semibold self-start">
						Plan Your Workout
					</h1>
				</Link>
				{/* Data Section  */}

				<div className="w-full h-auto px-4 pt-16 flex flex-col gap-4">
					{data.map(({ name, img }, _indx) => (
						<WorkoutCard key={_indx} img={img} name={name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
