import { createAction } from '../../utils/reducer/reducer.utils';
import { CategoriesAction } from './categories.types';


export const setCategoriesMap = (categoriesMap) =>
  createAction(CategoriesAction.setCategoriesMap, categoriesMap)