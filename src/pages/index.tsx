import Axios from 'axios';

import type { NextPage, GetStaticProps } from 'next'
import Product from '../components/Product';

type Product = {
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
};

type HomeProps = {
  data: Product[];
};


export default function Home(props: HomeProps) {
  return (
    <div className='grid grid-cols-2 gap-2 p-4 max-w-4xl m-auto
      md:grid-cols-3 md:gap-4 md:p-10'
    >
      {props.data.map((value, index) => <Product {...value} key={value.id} />)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await Axios.get("https://fakestoreapi.com/products");

  return {
    props: { data }
  };
}

