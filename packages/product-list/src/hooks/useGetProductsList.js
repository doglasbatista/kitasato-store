import React, {useState, useEffect} from 'react';

import getProductsListService from '../services/getProductsList';

const useGetProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState([]);

  const handleGetProductsList = async () => {
    setLoading(true);
    const [response, error] = await getProductsListService();
    setLoading(false);

    if (error) console.log('TODO: Tratar erro');

    setProductsList(response);
  };

  useEffect(() => {
    handleGetProductsList();
  }, []);

  return {
    loading,
    productsList,
  };
};

export default useGetProductsList;
