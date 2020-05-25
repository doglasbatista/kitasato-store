import React, {useState, useEffect} from 'react';

import getMiniCartDataService from '../services/getMiniCartData';

const useGetMiniCartData = () => {
  const [miniCartData, setMiniCartData] = useState([]);
  const [loading, setLoading] = useState([]);

  const handleGetMiniCartData = async () => {
    setLoading(true);
    const [response, error] = await getMiniCartDataService();
    setLoading(false);

    if (error) console.log('TODO: Tratar erro');

    setMiniCartData(response);
  };

  useEffect(() => {
    handleGetMiniCartData();
  }, []);

  return {miniCartData, loading};
};

export default useGetMiniCartData;
