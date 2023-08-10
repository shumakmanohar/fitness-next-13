const Loading = () => {
	return (
		<div className="bg-image">
			<div className="max-w-[1500px] mx-auto min-h-screen   relative">
				{/* Title */}
				<div
					href={"/"}
					className=" text-white flex pl-8 pt-16 gap-4 items-center mt-18"
				>
					<div className="animate-pulse h-12 w-12 bg-black flex items-center justify-center rounded-full"></div>
					<h1 className="text-4xl uppercase font-semibold">{}</h1>
				</div>
				{/* Data Section  */}
				<div className="w-full h-auto mp-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{[324, 4234, 232, 423, 4234, 2].map(
						({ name, difficulty, equipment }, _indx) => (
							<div
								key={_indx}
								className="w-full  flex items-center justify-center p-4"
							>
								<div className="w-5/6 md:w-full  animate-pulse bg-black text-white h-40  flex flex-col gap-4 rounded-lg p-4 shadow-md"></div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Loading;
