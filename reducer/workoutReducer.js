"use client";
import { ReducerVar } from "@/util/Var";

export const InitialState = {
	glutes: [],
	calves: [],
	biceps: [],
	traps: [],
};

const workoutReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case ReducerVar.ADDWORKOUT:
			console.log("Workout ADD Reducer");
			return { ...payload };
		case ReducerVar.EDITWORKOUT:
			console.log("Workout EDIT Reducer");
			return { ...payload };
		case ReducerVar.DELETEWORKOUT:
			console.log("Workout DELETE Reducer");
			return { ...payload };
		default:
			throw new Error(`No case for type ${type} found in shopReducer.`);
	}
};
export default workoutReducer;
