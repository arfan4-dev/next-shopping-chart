import Head from 'next/head'
import Image from 'next/image'
import Products from './Products';


export default function Home({ products }) {
  console.log('products',products)
  return (
  
     <div>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet"/>
        <title>Product List</title>
      </Head>
      <div className='grid sx:grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
      {products.map((post) => (
        <Products key={post.id} post={post} />
      ))}
    </div>
      
    </div>
    
  )

 
}


export async function getServerSideProps() {
  const apiUrl = 'https://fakestoreapi.com/products';

  
    const res = await fetch(apiUrl);
    const data = await res.json();
    const products=data;

    return {
      props: {
        products,
      },
    };


}