const fakeRequest = () => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: 'All star',
            description:
              'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.',
            price: 28989,
          },
          {
            id: 2,
            title: 'Vans ultrarange',
            description: 'Si num tem leite então bota uma pinga aí cumpadi!',
            price: 55969,
          },
          {
            id: 3,
            title: 'Vans old skool',
            description:
              'In elementis mé pra quem é amistosis quis leo. Aenean aliquam molestie leo, vitae iaculis nisl.',
            price: 35999,
          },
        ]),
      1000,
    ),
  );
};

const getProductsList = async () => {
  try {
    const response = await fakeRequest();

    return [response, null];
  } catch (err) {
    return [null, err];
  }
};

export default getProductsList;
