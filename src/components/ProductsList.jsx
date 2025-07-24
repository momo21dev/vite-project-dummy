import { useNavigate } from 'react-router-dom';
import UseProducts from './UseProducts';
import { useEffect, useState } from 'react';
import CartInfo from './CartInfo';

export default function ProductList({cart,setCart}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All')
  const products = UseProducts();
  const navigate = useNavigate();

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLocaleLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );
  const GetCategory = searchedProducts.filter(product => {
    if (category === 'All') return product
    if (category === 'beauty') return product.category === 'beauty'
    if (category === 'fragrances') return product.category === 'fragrances'
    if (category === 'furniture') return product.category === 'furniture'
  })

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (

    <div className="p-6">

      <div className="mb-6 max-w-md mx-auto ">
        
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product . . ."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className='flex justify-center gap-4 mt-4'>
          <button onClick={() => setCategory('All')} className='bg-blue-600 rounded-xl p-2 text-white'>All</button>
          <button onClick={() => setCategory('beauty')} className='bg-blue-600 rounded-xl p-2 text-white'>Beuaty</button>
          <button onClick={() => setCategory('fragrances')} className='bg-blue-600 rounded-xl p-2 text-white'>Fragrances</button>
          <button onClick={() => setCategory('furniture')} className='bg-blue-600 rounded-xl p-2 text-white'>Furniture</button>
        </div>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {GetCategory.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold mb-2 line-clamp-1 text-gray-800">
              {product.title}
            </h2>
            <button
              onClick={() =>
                navigate('/product-details', { state: { product } })
              }
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Show Info
            </button>
            <button
              onClick={() => setCart([...cart, product])}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 ">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
