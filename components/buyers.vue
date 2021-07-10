<template>
  <div>
    <main>
      <section class="cover__bg">
        <div class="buyers__col">
          <a href="/" class="buyers__link">
            <svg class="buyers__icon">
              <use href="~static/sprite.svg#src-1"></use>
            </svg>
          </a>
          <a
            href=""
            @click="reset()"
            class="buyers__link buyers__link--position"
          >
            <svg class="buyers__icon">
              <use href="~static/sprite.svg#src-5"></use>
            </svg>
          </a>
          <div class="block">
            <p class="counter__text">Параметри:</p>
            <div class="counter__flex">
              <div class="counter counter__flex--margin">
                <svg class="counter__icon">
                  <use href="~static/sprite.svg#src-2"></use>
                </svg>
                <div class="counter__bl">
                  <div class="counter__num">{{ sad }}</div>
                </div>
              </div>
              <div class="counter">
                <svg class="counter__icon counter__icon--smile">
                  <use href="~static/sprite.svg#src-3"></use>
                </svg>
                <div class="counter__bl">
                  <div class="counter__num">{{ smile }}</div>
                </div>
              </div>
            </div>
            <div class="block__flex">
              <div class="counter">
                <svg class="counter__icon counter__icon--smile">
                  <use href="~static/sprite.svg#src-4"></use>
                </svg>
                <div class="counter__bl">
                  <div class="counter__num">{{ heart }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="counter__block"></div>
          <p class="counter__number">Осталось в очереди:</p>
          <div class="queue">
            {{ queue }}<span class="queue__text">/{{ clients.length }}</span>
          </div>
        </div>
        <ul class="list btn__list">
          <li>
            <button class="btn__drug" @click="buySad(clients)">
              Препарат 1
            </button>
          </li>
          <li>
            <button
              class="btn__drug btn__drug--color"
              @click="buySmile(clients)"
            >
              Препарат 2
            </button>
          </li>
          <li>
            <button class="btn__drug btn__drug--bg" @click="buyHeart(clients)">
              Препарат 3
            </button>
          </li>
        </ul>
        <ul
          :class="{
            toLeft: left,
            toUp: up,
            toRight: right
          }"
          class="card list"
          v-for="item in clients"
          :key="item.id"
          v-if="clients_count === item.id"
        >
          <li
            v-touch="{
              left: () => swipe('left'),
              right: () => swipe('right'),
              up: () => swipe('up')
            }"
          >
            <div
              class="card__img "
              :class="{
                card__bg: isActive,
                active__bg: activeBg,
                bg__card: cardBg,
                gradient__bg: gradientBg
              }"
            ></div>
            <div class="card__content">
              <p class="card__name">{{ item.name }}</p>
              <p class="card__value">{{ item.value }}</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "buyers",
  data() {
    return {
      left: false,
      up: false,
      right: false,
      swipeDirection: "None",
      clients_count: 1,
      isActive: false,
      activeBg: false,
      cardBg: false,
      gradientBg: false,
      queue: 0
    };
  },
  mounted() {
    this.queue = this.clients.length;
  },
  computed: {
    sad() {
      return this.$store.getters["variables/getSad"];
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
    buySad() {
      if (this.clients_count < this.clients.length) {
        this.right = false;
        this.up = false;
        this.left = true;
        this.$store.commit("variables/setSad");
        this.clients_count += 1;
        this.queue -= 1;
        if (this.clients_count === 2) {
          this.isActive = true;
        } else if (this.clients_count === 3) {
          this.activeBg = true;
        } else if (this.clients_count === 4) {
          this.cardBg = true;
        } else if (this.clients_count === 5) {
          this.gradientBg = true;
        }
      } else {
        this.$store.commit("variables/setSad");
        this.$router.push("/finali");
      }
    },
    buySmile() {
      if (this.clients_count < this.clients.length) {
        this.right = false;
        this.up = true;
        this.left = false;
        this.$store.commit("variables/setSmile");
        this.clients_count += 1;
        this.queue -= 1;
        if (this.clients_count === 2) {
          this.isActive = true;
        } else if (this.clients_count === 3) {
          this.activeBg = true;
        } else if (this.clients_count === 4) {
          this.cardBg = true;
        } else if (this.clients_count === 5) {
          this.gradientBg = true;
        }
      } else {
        this.$store.commit("variables/setSmile");
        this.$router.push("/finali");
      }
    },
    buyHeart() {
      if (this.clients_count < this.clients.length) {
        this.right = true;
        this.up = false;
        this.left = false;
        this.$store.commit("variables/setHeart");
        this.clients_count += 1;
        this.queue -= 1;
        if (this.clients_count === 2) {
          this.isActive = true;
        } else if (this.clients_count === 3) {
          this.activeBg = true;
        } else if (this.clients_count === 4) {
          this.cardBg = true;
        } else if (this.clients_count === 5) {
          this.gradientBg = true;
        }
      } else {
        this.$store.commit("variables/setHeart");
        this.$router.push("/finali");
      }
    },
    swipe(direction) {
      this.swipeDirection = direction;
      console.log(this.swipeDirection);
      if (this.swipeDirection === "left") {
        this.buySad();
      } else if (this.swipeDirection === "up") {
        this.buySmile();
      } else if (this.swipeDirection === "right") {
        this.buyHeart();
      }
    },
    reset() {
      this.clients_count = 1;
      this.$store.commit("variables/setSadReset", 0);
      this.$store.commit("variables/setSmileReset", 0);
      this.$store.commit("variables/setHeartReset", 0);
    }
  }
};
</script>
