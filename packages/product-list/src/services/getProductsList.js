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
            id: 2,
            title: 'Vans ultrarange',
            description: 'Si num tem leite então bota uma pinga aí cumpadi!',
            price: 55969,
            imagePath:
              'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h2f/h46/h00/h00/9543278592030/1003500430037U-01-BASEIMAGE-Midres.jpg',
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
          {
            id: 4,
            title: 'Vans Authentic Classic',
            description:
              'Aenean aliquam molestie leo, vitae iaculis nisl.',
            price: 22999,
            imagePath:
              'https://surfalive.fbitsstatic.net/img/p/tenis-vans-classic-u-authentic-black-black-71032/231045.jpg?w=800&h=800&v=no-change'
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
