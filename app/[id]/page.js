import WorkoutInfoCard from "@/components/WorkoutInfoCard";
import GetWorkouts from "@/lib/GetWorkouts";
import Link from "next/link";
import { AiOutlineArrowLeft, AiFillStar } from "react-icons/ai";
const Page = async ({ params }) => {
	const data = await GetWorkouts(params.id, 12200);
	console.log(data);
	return (
		<div className="bg-image">
			<div className="max-w-[1500px] w-full mx-auto min-h-screen   relative">
				{/* Title */}

				<Link
					href={"/"}
					className=" text-white flex pl-8 pt-16 gap-4 items-center mt-18 "
				>
					<div className="h-12 w-12 bg-black flex items-center justify-center rounded-full">
						<AiOutlineArrowLeft className="" />
					</div>
					<h1 className="text-4xl uppercase font-semibold">{params.id}</h1>
				</Link>
				{/* Data Section  */}
				<div className="w-full h-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{data.map(({ name, difficulty, equipment }, _indx) => (
						<div
							key={_indx}
							className="w-full  flex items-center justify-center p-4"
						>
							<WorkoutInfoCard
								workoutGrp={params.id}
								name={name}
								difficulty={difficulty}
								equipment={equipment}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
