<template>
  <div>
    <main>
      <section class="cover__bg">
        <div class="cover__img ">
          <div class="cover__circle">
            <p class="cover__text">Добро пожаловать в игру</p>
            <h1 class="cover__title">
              Помоги<br />
              <span class="cover__title--uppercase">Фармацевту</span>
            </h1>
            <nuxt-link to="/buyers">
              <button class="cover__btn">Начать</button>
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "cover"
};
</script>
