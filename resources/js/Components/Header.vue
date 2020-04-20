<template>
    <header class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <router-link :to="{name: 'index'}">
                    <a class="navbar-brand" id="brand">Allete</a>
                </router-link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name: 'catalog'}">
                            <a href="" class="nav-link">Каталог</a>
                        </router-link>
                    </li>
                    <li class="nav-item hover-shadow-allete">
                        <a class="nav-link" href="#">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Акции</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Сертификация</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Контакты</a>
                    </li>
                </ul>
                <form class="form-inline search-form">
                    <input class="form-control mr-sm-2 input-text-allete"
                           type="search" placeholder="Поиск" aria-label="Search">
                </form>
                <Login v-if="guest" class="dropdown my-2 my-lg-0">
                </Login>
                <Registration v-if="guest" class="dropdown my-2 my-lg-0">
                </Registration>
                <ul v-else class="topmenu">
                    <li>
                        <div class="d-flex" id="dropdownMenu3" href="#" role="button" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                            <a href="#" class="text-secondary my-auto nav-link">
                                {{ user.login }}
                            </a>
                            <img class="img-test " src="/contact.png" alt="(">
                        </div>
                        <ul class="submenu">
                            <li class="submenu-border-top"><a href="">Мой кабинет</a></li>
                            <li><a href="">Моя корзина</a></li>
                            <li><a href="">Мои заказы</a></li>

                            <li v-if="isAdmin"><a href="" class="submenu-link">Администрирование</a>
                                <ul class="submenu">
                                    <li><a href="">Новости</a></li>
                                    <li><a href="">Товары</a></li>
                                    <li><a href="">меню третьего уровня</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="divider"></div>
                            </li>
                            <li class="submenu-border-bot">
                                <form id="logout-form" action="" method="POST" @submit.prevent="logout">
                                    <button class="dropdown-item submenu-border-bot" type="submit" name="logout">Выйти
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="cart mx-1">
                    <img class="cart-img" src="/cart.png" alt="(">
                    <span class="cart-count color-allete" v-text="countProducts"></span>
                    <router-link class="stretched-link" :to="{name: 'cart'}">
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import {bus} from './../Bus.js'
    import Login from './Login'
    import Registration from './Registration'

    export default {
        name: "Header",
        data: () => {
            return {
                login_email: null,
                password: null,
                remember_me: true,
                email: '',
            }
        },
        components: {
            Login,
            Registration,
        },
        async created() {
            axios.interceptors.response.use(
                response => response,
                error => {
                    const {status} = error.response;
                    if (status === 401) {
                        this.$store.commit('auth/logout')
                    }
                    return Promise.reject(error);
                }
            );

            bus.$on('ProductAddToCart', this.addProductToCart);

            this.$store.dispatch('cart/init').then(res => {
            });

            this.$store.commit('auth/init');

            if (!this.guest) {
                let user = await axios.get('/api/auth/user').then(response => response.data.user);
                this.$store.commit('auth/login', user)
            }

        },
        methods: {
            addProductToCart(product) {
                this.$store.dispatch('cart/addProduct', product);
            },
            logout() {
                axios.post('/api/auth/logout')
                    .then(response => response.data)
                    .then(({success}) => {
                        if (success) {
                            this.$store.commit("auth/logout", [])
                        }
                    })
            },
        },
        computed: {
            guest() {
                return !this.$store.getters['auth/isLogged']
            },
            isAdmin() {
                return this.$store.getters['auth/user/isAdmin']
            },
            user() {
                return this.$store.getters['auth/user']
            },
            countProducts() {
                return this.$store.getters['cart/countProducts']
            }
        }
    }
</script>

<style scoped>
    .cart {
        position: relative;
        padding: 5px;
    }

    .cart-img {
        width: 50px;
        height: 50px;
    }

    .cart-count {
        position: absolute;

        padding: 3px;

        background-color: white;
        border-radius: 5px;
        left: 0;
        top: 0;
    }

    #brand {
        font-size: 30px;
    }
</style>
