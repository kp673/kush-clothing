
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./directory.styles";
import { categories } from "./categories";

const Directory = () => {
  
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

export default Directory