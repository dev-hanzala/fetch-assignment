import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

export type { Product };

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-2">
    <div className="relative h-48 w-full">
      <Image
        src={product.image}
        fill
        alt={product.title}
        className="object-contain p-2"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm h-12 overflow-hidden">
        {product.title}
      </h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-bold text-green-600">
          ${product.price}
        </span>
        <div className="flex items-center">
          <span className="text-yellow-500">Rating: </span>
          <span className="text-sm ml-1 text-gray-600">
            {product.rating.rate}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
