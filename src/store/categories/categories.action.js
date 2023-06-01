import { createAction } from '../../utils/reducer/reducer.utils';
import { CategoriesAction } from './categories.types';


export const setCategories = (categories) =>
  createAction(CategoriesAction.setCategories, categories)