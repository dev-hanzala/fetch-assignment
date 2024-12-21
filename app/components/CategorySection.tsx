import ProductCard, { Product } from "./ProductCard";

interface CategorySectionProps {
  category: string;
  products: Product[];
}

const CategorySection = ({ category, products }: CategorySectionProps) => (
  <div className="w-full mb-8">
    <h2 className="text-2xl font-bold mb-4 px-4 capitalize">{category}</h2>
    <div className="flex flex-wrap justify-start">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
);

export default CategorySection;
