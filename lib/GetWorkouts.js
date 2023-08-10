import { resolve } from "styled-jsx/css";

export const delay = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const GetWorkouts = async (name) => {
	//await delay(1500);
	const response = await fetch(
		`https://api.api-ninjas.com/v1/exercises?muscle=${name}`,
		{
			headers: {
				"X-Api-Key": "KhEWu4JCnp8MBmqQsy4Nag==6z4Dju6QMyS1LvDa",
			},
		}
	);
	if (!response.ok) {
		throw new Error("Failed To Fetch");
	}
	return response.json();
};

export default GetWorkouts;
