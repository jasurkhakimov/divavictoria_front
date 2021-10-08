<template>
  <div class="d-flex">
    <div class="mobile_soon">
      <div class="lang_toggle">
        <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex align-center" v-bind="attrs" v-on="on">
              <span class="lang_toggle__title">
                {{ lang.title }}
              </span>
              <v-icon color="white">
                {{ showMenu ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </div>
          </template>

          <v-list>
            <v-list-item class="lang_toggle__list" v-for="(item, index) in langs" :key="index">
              <v-list-item-title class="lang_toggle__list_title" @click="lang = item">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <img
        class="mobile_soon__logo"
        :src="require('../../assets/img/logo.svg')"
        alt=""
      />
      <div class="mobile_soon__title">{{translation[lang.id].title}}</div>
      <div class="mobile_soon__subtitle" v-html="translation[lang.id].subtitle">
      </div>
      <a
        href="https://www.instagram.com/divavictoriaatelier/"
        class="mobile_soon__inst_link"
      >
        <img :src="require('../../assets/icons/instagram.svg')" alt="" />
        Instagram
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Soon",
  components: {},
  data: () => ({
      showMenu: false,
    langs: [
      { title: "РУС", id: "ru" },
      { title: "ENG", id: "en" },
    ],
    lang: { title: "РУС", id: "ru" },
    translation: {
        'en': {
            title: 'Site will open soon',
            subtitle: `In the meantime, you can get <br />
        acquainted with the collection <br />
        and place an order on our`,
        },
        'ru': {
            title: 'Сайт скоро откроется',
            subtitle: `А пока вы можете ознакомиться с коллекцией и оформить заказ в нашем`,
        }

    }
  }),
};
</script>

<style lang="scss" scoped>
.mobile_soon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/tempmainimage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 16px;

  &__logo {
    width: 100%;
  }

  &__title {
    font-family: "Playfair Display" !important;
    font-size: 36px;
    line-height: 44px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 33px;
    line-height: 40px;
    margin-bottom: 11px;
    transform: scale(1, 0.95);

    &::first-letter {
      font-size: 120%;
    }
  }

  &__subtitle {
    font-size: 18px;
    text-align: center;
    font-family: "proxima_nova";
    text-transform: uppercase;
    line-height: 22px;
    letter-spacing: 1.5px;
    padding: 0 -5px;
    transform: scale(1, 0.95);
    margin-bottom: 24px;
    &::first-letter {
      font-size: 125%;
    }
  }

  &__inst_link {
    display: block;
    background-color: #fff;
    padding: 11px;
    width: 260px;
    text-decoration: none;
    color: #000;
    font-family: "proxima_nova";
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    // line-height: 22px;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover,
    :focus {
      background-color: rgba(255, 255, 255, 0.89);
    }
  }

  & .lang_toggle {
    // width: 45px;
    position: absolute;
    top: 13px;
    right: 16px;
    padding: 5px;
    &__title {
        margin-right: 8px;
        font-family: "proxima_nova"!important;
    }

    &__list_title {
        width: 43px!important;
    }
    font-family: "proxima_nova"!important;
  }
}
</style>
