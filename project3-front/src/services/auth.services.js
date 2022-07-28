import service from './service';

const URL = '/auth';

const signupService = (user) => {
	return service.post(`${URL}/signup`, user);
};

const loginService = (user) => {
	return service.post(`${URL}/login`, user);
};

const verifyService = () => {
	return service.get(`${URL}/verify`);
};

const getMyUser = (id) => {
	return service.get(`${URL}/user/${id}`);
};

export { signupService, loginService, verifyService, getMyUser };
