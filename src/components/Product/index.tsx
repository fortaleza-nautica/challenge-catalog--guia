
type ProductProps = {
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

export default function Product(props: ProductProps) {
  return (
    <a href='#' className='p-2 rounded-lg bg-gray-200 hover:shadow-xl
      shadow-black transition-shadow duration-300'
    >
      <div className='max-h-80 aspect-square overflow-hidden rounded-md'>
        {(
          <img alt={props.title} src={props.image} className='aspect-square object-cover' /> // eslint-disable-line
        )}
      </div>

      <div>
        <p className='font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap'
          title={props.title}
        >
          {props.title}
        </p>

        <p>Category: <span className='text-gray-600'>{props.category}</span></p>

        <p className='text-gray-600 flex justify-between pt-4'>
          ${props.price}
          <span>Rating: {props.rating.rate}</span>
        </p>
      </div>
    </a>
  );
}
