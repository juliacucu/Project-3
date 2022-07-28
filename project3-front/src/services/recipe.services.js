import axios from 'axios';
import service from './service';

const URL = '/recipes';

const getAllRecipesService = () => {
	return service.get(`${URL}/`);
};

const getRecipeDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

const getAddFavoriteService = (id) => {
	return service.post(`${URL}/add-favorite/${id}`);
};

const addNewRecipeService = (newRecipe) => {
	return service.post(`${URL}/create`, newRecipe);
};
const getAllWines = () => {
	return axios.get(`https://json-server-wines.herokuapp.com/wines`);
};

export { getAllRecipesService, getRecipeDetailsService, addNewRecipeService, getAddFavoriteService, getAllWines };