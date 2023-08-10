import MuscleCard from "./MuscleCard";
import Nav from "./Nav";
import Link from "next/link";
import WorkoutCard from "./WorkoutCard";
import { HeroDynamic } from "./HeroDynamic";

const Hero = () => {
	return (
		<div className="">
			<div className="max-w-[1500px] mx-auto pt-16 md:pt-0 px-4 md:px-8 h-screen text-white top-0">
				<div className=" h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{/* Hero Text */}
					<div className="md:flex flex-col gap-10  items-start justify-center hidden  lg:col-span-1 xl:col-span-1">
						<h1 className="text-6xl font-bold">
							Workout <br />& Live More
						</h1>
						<p className="md:max-w-[55ch] text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam
							incidunt neque temporibus. Sequi, minima veniam animi amet velit
							quisquam quis laboriosam tempore totam consequuntur quas
							laudantium nihil et eveniet voluptate, exercitationem illo
							excepturi natus est accusamus consectetur officia, mollitia at
							eum? Quisquam quas sint sequi! Numquam enim aliquam harum.
						</p>
						<Link
							href={"/plan-workout"}
							className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-3 rounded-lg text-sm"
						>
							Plan Your Workout
						</Link>
					</div>
					{/* Dynamic Content */}
					<HeroDynamic />
				</div>
			</div>
			<div className="h-screen w-screen absolute top-0 -z-10">
				<img src="/bg-banner.png" className="video-bg" />
				<div className="absolute top-0 bg-gradient-to-r from-slate-900 to-slate-900/50 h-screen w-screen"></div>
			</div>
		</div>
	);
};

export default Hero;
