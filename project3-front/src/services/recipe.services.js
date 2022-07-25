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

export { getAllRecipesService, getRecipeDetailsService, addNewRecipeService, getAddFavoriteService };