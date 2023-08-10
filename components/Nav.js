import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
	return (
		<div className="w-full p-4 flex justify-between items-center text-white absolute top-0 ">
			<div>
				<h1 className="text-2xl font-semibold">WOKЯ.</h1>
			</div>
			<div>
				<div>
					<RxHamburgerMenu className="h-6 w-6 md:hidden" />
				</div>
				<div className="hidden md:flex gap-10">
					<button>Fitness</button>
					<button>Guide</button>
					<button>Help</button>
					<Link
						href={"/plan-workout"}
						className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-3 rounded-lg text-sm"
					>
						Plan Your Workout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
