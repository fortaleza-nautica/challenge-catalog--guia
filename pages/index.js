import Head from "next/head";
import { useEffect, useState } from "react";
import api from "../services/api.tsx";


export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    prod();
  }, []);
  const prod = () => {
    api
      .get()
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto m-auto p-2">
      <Head>
        <title>Catalog</title>
      </Head>

      <main>
        <nav>
          <div className="flex items-center justify-between py-4  ">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-extrabold tracking-tight text-gray-900">
                <a href="#">Produtos</a>
              </div>
            </div>
          </div>
        </nav>
      </main>

      <div className="bg-white">
        <div className="mx-auto mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className=" group relative">
                <div style={{minHeight: '200px'}} className="w-full border-solid border-2 border-light-gray-200 items-center flex justify-center aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-2/5  object-center object-cover lg:w-2/5"
                  />
                </div>
                <div className="mt-4 flex items-center flex-col w-full">
                  <div>
                    <h3 className="text-sm text-gray-700 text-center">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    R${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
