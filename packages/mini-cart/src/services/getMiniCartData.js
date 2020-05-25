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
            imagePath:
              'https://laranjeiras.vteximg.com.br/arquivos/ids/164082-600-600/tenis-converse-all-star-vermelho-cano-alto-1.jpg?v=636991673214100000',
          },
          {
            id: 3,
            title: 'Vans old skool',
            description:
              'In elementis mé pra quem é amistosis quis leo. Aenean aliquam molestie leo, vitae iaculis nisl.',
            price: 35999,
            imagePath:
              'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg',
          },
        ]),
      3000,
    ),
  );
};
const getMiniCartData = async () => {
  try {
    const response = await fakeRequest();

    return [response, null];
  } catch (err) {
    return [null, err];
  }
};

export default getMiniCartData;
