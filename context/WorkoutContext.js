"use client";
import workoutReducer, { InitialState } from "@/reducer/workoutReducer";
import { ReducerVar } from "@/util/Var";
import {
	createContext,
	useReducer,
	useContext,
	useEffect,
	useState,
} from "react";

const FitnessContext = createContext(InitialState);

export const FitnessProvider = ({ children }) => {
	const [localStorageData, setLocalStorageData] = useState("");
	const getLocalData = () => {
		if (localStorageData) {
			return localStorageData;
		} else {
			return InitialState;
		}
	};

	const [state, dispatch] = useReducer(workoutReducer, getLocalData());

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(state));
		setLocalStorageData(JSON.parse(localStorage.getItem("data")));
	}, [state]);

	const addWorkout = (data) => {
		let newWorkout = {
			...state,
			[data.workoutGrp]: [
				...state[data.workoutGrp],
				{
					name: data.name,
					duration: data.duration,
				},
			],
		};

		dispatch({
			type: ReducerVar.ADDWORKOUT,
			payload: newWorkout,
		});
	};

	const removeWorkout = (data) => {
		console.log(data);
		let newWorkout = {
			...state,
			[data.workoutGrp]: state[data.workoutGrp].filter(
				(itm) => itm.name !== data.name
			),
		};
		dispatch({
			type: ReducerVar.DELETEWORKOUT,
			payload: newWorkout,
		});
	};

	const editWorkout = () => {
		dispatch({
			type: ReducerVar.EDITWORKOUT,
			payload: {
				total,
			},
		});
	};

	const value = {
		workouts: state,
		editWorkout,
		addWorkout,
		removeWorkout,
	};
	return (
		<FitnessContext.Provider value={value}>{children}</FitnessContext.Provider>
	);
};

const useFitness = () => {
	const context = useContext(FitnessContext);

	if (context === undefined) {
		console.log("yoooo");
		throw new Error("Yo Wat the Hell");
	}

	return context;
};

export default useFitness;
