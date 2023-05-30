import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component';
const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span>{title[0].toUpperCase()+title.substring(1)}</span>
      </h2>
      <div className='preview'>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) =>
              <ProductCard key={product.id} product={product} />
            )
        }
      </div>

    </div>
  );
}

export default CategoryPreview;