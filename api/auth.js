import {Auth} from "./axios";
import {getData} from "../utils/response";
import {Cookies} from "react-cookie";

export async function login(param) {

	let response = null;

	const headers = {
		'x-api-version': '1',
		'x-api-service-line': '0002'
	};

	await Auth.post('/auth/login', param, {headers})
		.then(r => {
			response = r;
		});

	return getData(response);

}

export async function refresh() {

	const cookies = new Cookies();

	const headers = {
		'x-api-version': '1',
		'x-api-key': 'system',
		'Authorization': `Bearer ${cookies.get('refresh')}`
	};

	let response = null;

	await Auth.post('/auth/token/refresh', null, {headers})
		.then((r) => {
			response = r;
		});


	if(response.data.code === '000000') {

		cookies.set('access', response.data.result.access, { path: "/" });

		return response.data.result.access;

	} else {

		throw location.href="../../web-system/auth/login";

	}

}