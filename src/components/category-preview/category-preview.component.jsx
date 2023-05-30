import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`/shop/${title}`)
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={onClickHandler}>{title[0].toUpperCase()+title.substring(1)} &#10095;</Title>
      </h2>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) =>
              <ProductCard key={product.id} product={product} />
            )
        }
      </Preview>

    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;