import Image from "next/image";
import Link from "next/link";

const MuscleCard = ({ name, img }) => {
	return (
		<Link
			href={`/${name.toLowerCase()}`}
			className="flex items-center justify-center py-4"
		>
			<div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-full md:w-3/4 p-8 flex gap-4 flex-col items-center justify-center rounded-lg shadow-md">
				<div className="relative w-14 h-14 ">
					<Image src={img} fill={true} alt="Muscle Image" />
				</div>
				<div>
					<p className="uppercase">{name}</p>
				</div>
			</div>
		</Link>
	);
};

export default MuscleCard;
