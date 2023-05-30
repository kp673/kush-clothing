import { BackgroundImage, Body, CategoryContainer } from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route)
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title[0].toUpperCase()+title.substring(1)}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
}

export default CategoryItem