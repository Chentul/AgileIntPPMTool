import axios from 'axios';
import { GET_ERRORS } from './types';

const API_PROJECT = encodeURI('http://localhost:8080/api/project');

export const createProject = (project, history) => async (dispatch) => {
	try {
		const res = await axios.post(API_PROJECT, project);
		history.push('/dashboard');
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	}
};
