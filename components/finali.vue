<template>
  <div>
    <div class="finali__bg"></div>
    <a href="/" class="finaly__link" @click="goHome()">
      <svg class="finali__icon">
        <use href="~static/sprite.svg#src-1"></use>
      </svg>
    </a>
    <div class="finaly__block">
      <ul class="list finali__flex">
        <li class="finaly__block--size">
          <div class="finali__count">{{ (sad / clients.length) * 100 }}%</div>
          <p class="finali__text">Препарат 1</p>
        </li>
        <li class="finaly__block--size">
          <div class="finali__count">{{ (smile / clients.length) * 100 }}%</div>
          <p class="finali__text">Препарат 2</p>
        </li>
        <li class="finaly__block--size">
          <div class="finali__count">{{ (heart / clients.length) * 100 }}%</div>
          <p class="finali__text">Препарат 3</p>
        </li>
      </ul>
      <div class="finali__description">
        <h2 class="finali__heading">
          <span class="finali__heading--text">Ваш результат:</span><br />
          «Что я здесь делаю?»
        </h2>
        <p class="description__text">
          Это тестовое задание, так что не будем углубляться в глубины проблем
          фармацевтов.
        </p>
      </div>
    </div>
    <button class="finali__btn" @click="goHome()">
      Попробовать еще
    </button>
  </div>
</template>

<script>
export default {
  name: "finali",
  data() {
    return {};
  },
  computed: {
    sad() {
      return this.$store.state.variables.sad;
    },
    smile() {
      return this.$store.getters["variables/getSmile"];
    },
    heart() {
      return this.$store.getters["variables/getHeart"];
    },
    clients() {
      return this.$store.getters["variables/getClients"];
    }
  },
  methods: {
    goHome() {
      this.$store.commit("variables/setSadReset", 0);
      this.$store.commit("variables/setSmileReset", 0);
      this.$store.commit("variables/setHeartReset", 0);
      this.$router.push("/");
    }
  }
};
</script>
