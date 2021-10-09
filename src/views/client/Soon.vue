<template>
    <div>
        <div class="lang_toggle">
            <v-menu
                v-model="showMenu"
                absolute
                offset-y
                style="max-width: 600px"
                transition="slide-y-transition"
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex align-center" v-bind="attrs" v-on="on">
                        <span class="lang_toggle__title">
                            {{ lang.title }}
                        </span>
                        <v-icon>
                            {{
                                showMenu ? "mdi-chevron-up" : "mdi-chevron-down"
                            }}
                        </v-icon>
                    </div>
                </template>

                <v-list>
                    <v-list-item
                        class=""
                        v-for="(item, index) in langs"
                        :key="index"
                        ripple
                        :class="[
                            lang.id == item.id ? 'lang_active' : '',
                            'lang_toggle__list',
                        ]"
                    >
                        <v-list-item-title
                            class="lang_toggle__list_title"
                            @click="lang = item"
                            >{{ item.title }}</v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="mobile_soon">
            <img
                class="mobile_soon__logo"
                :src="require('../../assets/img/logo.svg')"
                alt=""
            />
            <div class="mobile_soon__title">
                {{ translation[lang.id].title }}
            </div>
            <div
                class="mobile_soon__subtitle"
                v-html="translation[lang.id].subtitle"
            ></div>
            <a
                href="https://www.instagram.com/divavictoriaatelier/"
                class="mobile_soon__inst_link"
            >
                <img
                    :src="require('../../assets/icons/instagram.svg')"
                    alt=""
                />
                Instagram
            </a>
        </div>

        <div class="desktop">
            <div class="desktop__img_block">
                <img
                    :src="require('../../assets/img/tempmainimage.jpg')"
                    alt="DV"
                />
            </div>

            <div class="desktop__info_block">
                <div class="content">
                    <img
                        class="content__logo"
                        :src="require('../../assets/img/logo_black.svg')"
                        alt=""
                    />
                    <div class="content__title">
                        {{ translation[lang.id].title }}
                    </div>
                    <div
                        class="content__subtitle"
                        v-html="translation[lang.id].subtitle"
                    >
                        {{ translation[lang.id].subtitle }}
                    </div>
                    <a
                        href="https://www.instagram.com/divavictoriaatelier/"
                        class="mobile_soon__inst_link"
                    >
                        <img
                            :src="require('../../assets/icons/instagram.svg')"
                            alt=""
                        />
                        <span> Instagram </span>
                    </a>
                </div>
            </div>
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
            en: {
                title: "Site will open soon",
                subtitle: `In the meantime, you can get
        acquainted with the&nbsp;collection
        and&nbsp;place an&nbsp;order on our`,
            },
            ru: {
                title: "Сайт скоро откроется",
                subtitle: `А пока вы можете ознакомиться с&nbsp;коллекцией и&nbsp;оформить заказ в&nbsp;нашем`,
            },
        },
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
}
.lang_active {
    background-color: black !important;
    color: white !important;
}

.v-list {
    padding: 0 !important;
}

.lang_toggle {
    // width: 45px;

    & .theme--light.v-icon {
        color: white;
    }
    z-index: 100;
    color: white;
    position: absolute;
    top: 13px;
    right: 16px;
    padding: 5px;
    &__title {
        margin-right: 8px;
        font-family: "proxima_nova" !important;
    }

    &__list {
        cursor: pointer;
    }
    font-family: "proxima_nova" !important;
}
.desktop {
    display: none;

    &__img_block {
        flex: 1;
        padding: 100px;
        padding-right: 0;
        text-align: right;
        margin-right: 40px;
        // max-width: 944px;
        & img {
            max-width: 592px;
            width: 100%;
            max-height: 880px;
            height: 100%;
        }
    }

    &__info_block {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .content {
            margin-top: 161px;
            // padding-right: 41px;
            &__logo {
                max-width: 455px;
                width: 100%;
            }

            &__title {
                font-family: "Playfair Display" !important;
                font-size: 64px;
                width: 450px;
                line-height: 68px;
                text-transform: uppercase;
                letter-spacing: 2px;
                transform: scale(1, 0.95);
                margin-top: 186px;
                margin-bottom: 26px;
                &::first-letter {
                    font-size: 120%;
                }
            }

            &__subtitle {
                max-width: 560px;
                font-size: 28px;
                line-height: 40px;
                font-family: "proxima_nova";
                text-transform: uppercase;
                letter-spacing: 1.5px;
                transform: scale(1, 0.95);
                margin-bottom: 41px;
                &::first-letter {
                    font-size: 120%;
                }
            }

            & .mobile_soon__inst_link {
                background-color: black;
                color: white;
                border: 1px solid transparent;
                line-height: 1;

                & img {
                    filter: invert(1);
                    width: 16px;
                    height: 16px;
                }

                &:hover {
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                    & img {
                        filter: invert(0);
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1281px) {
    .desktop {
        &__info_block {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            & .content {
                &__logo {
                    max-width: 350px;
                    width: 100%;
                }

                &__title {
                    font-family: "Playfair Display" !important;
                    font-size: 48px;
                    width: 400px;
                    line-height: 55px;
                    margin-top: 140px;
                    margin-bottom: 26px;
                    &::first-letter {
                        font-size: 120%;
                    }
                }

                &__subtitle {
                    max-width: 400px;
                    font-size: 18px;
                    line-height: 25px;
                    font-family: "proxima_nova";
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    transform: scale(1, 0.95);
                    margin-bottom: 24px;
                    &::first-letter {
                        font-size: 120%;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1025px) {
    .mobile_soon {
        display: none;
    }

    .lang_toggle {
        color: black;
        top: 5%;
        right: 6%;
        & .theme--light.v-icon {
            color: black;
        }
    }

    .desktop {
        display: flex;
    }
}
</style>
