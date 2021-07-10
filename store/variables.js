export const state = () => ({
  sad: 0,
  smile: 0,
  heart: 0,
  clients: [
    {
      name: "Марія, 19 років",
      value:
        "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні - давайте бренд.",
      id: 1
    },
    {
      name: "Степан, 61 рік",
      value:
        "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?",
      id: 2
    },
    {
      name: "Любов, 58 років",
      value:
        "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
      id: 3
    },
    {
      name: "Олександр, 20 років",
      value:
        "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.",
      id: 4
    },
    {
      name: "Ірина, 55 років",
      value:
        "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.",
      id: 5
    }
  ]
});

export const mutations = {
  setSad(state) {
    state.sad += 1;
  },
  setSadReset(state, payload) {
    state.sad = payload;
  },
  setSmile(state) {
    state.smile += 1;
  },
  setSmileReset(state, payload) {
    state.smile = payload;
  },
  setHeart(state) {
    state.heart += 1;
  },
  setHeartReset(state, payload) {
    state.heart = payload;
  }
};

export const getters = {
  getSad: state => state.sad,
  getSmile: state => state.smile,
  getHeart: state => state.heart,
  getClients: state => state.clients
};
