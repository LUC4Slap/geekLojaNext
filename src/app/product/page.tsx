'use client';
import CardPorduct from '@/components/CardPorduct';
import Modal from '@/components/Modal';
import axios from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page() {
  const [products, setproducts] = useState([]);

  const getProducts = (): void => {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    axios
      .get('http://localhost:5054/api/v1/Product', config)
      .then((data: any) => {
        setproducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // const getProducts = () => {
    //   const config = {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     },
    //   };
    //   axios
    //     .get('http://localhost:5054/api/v1/Product', config)
    //     .then((data: any) => {
    //       setproducts(data.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    getProducts();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  const addCar = (id: number): void => {
    alert(id);
  };

  return (
    <div className="p-3">
      <h1 className="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Produtos da loja
      </h1>
      <button
        onClick={toggleModal}
        className="block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Adicionar novo produto
      </button>
      <div className="flex flex-wrap gap-4">
        {products.length > 0 &&
          products.map((item: any) => {
            return <CardPorduct key={item.id} product={item} addCar={addCar} />;
          })}
      </div>
      {modalOpen && (
        <Modal
          toggleModal={toggleModal}
          modalOpen={modalOpen}
          getProduct={getProducts}
        />
      )}
    </div>
  );
}
