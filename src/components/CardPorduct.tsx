import { NextPage } from 'next';

interface Product {
  id: number;
  name: string;
  imageURL: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
  addCar: (id: number) => {};
}

const CardPorduct: NextPage<Props> = ({ product, addCar }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={product.imageURL}
          alt={product.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            R$ {product.price.toFixed(2)}
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() => addCar(product.id)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPorduct;
