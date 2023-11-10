import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios'; // Don't forget to import axios

const ProductItem = () => {
  const [item, setItem] = useState(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://fakestoreapi.com/products/${productId}`;
        const res = await axios.get(apiUrl);
        const { data } = res;
        setItem(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]); // Add productId as a dependency to useEffect

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-between  hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5  rounded-xl" id='product'>
    <div >
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
        </div>   
        <div>
        <p className="w-40 text-gray-400 font-normal text-[10px]">{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div> 
        <div className='h-[180px]'>
        <img src={item.image} alt='' className='h-full w-full'/> 
        </div> 
        
        <div className='flex justify-center gap-12 items-center w-full mt-5'>
        <div>
        <p className="text-green-600 font-semibold ">${item.price}</p>
        </div> 
        <div>
            
        </div> 
          </div> 
    </div>
  );
};

export default ProductItem;
