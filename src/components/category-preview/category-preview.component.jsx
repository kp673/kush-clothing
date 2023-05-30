import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>{title[0].toUpperCase()+title.substring(1)} &#10095;</Title>
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