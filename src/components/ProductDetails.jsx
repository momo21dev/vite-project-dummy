import { useLocation } from 'react-router-dom';
export default function ProductDetails() {
  const { state } = useLocation();

  const product = state?.product;
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">{product.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg shadow-md max-h-80 object-cover"
          />
        </div>

       
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">{product.description}</p>
          <h3 className="text-xl font-semibold text-green-600">PRICE: {product.price}$</h3>
          <h3 className="text-lg font-medium">BRAND: {product.brand}</h3>
          <h3 className="text-lg font-medium text-gray-600">CATEGORY: {product.category}</h3>
        </div>
      </div>

      {product.images?.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-2">PRODUCT IMAGES:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`product-img-${idx}`}
                className="rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
