<template>
    <header class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <a class="navbar-brand" href="/">Allete</a>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link">Каталог</a>
                    </li>
                    <li class="nav-item">
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
                    <input class="form-control mr-sm-2 border border-dark custom-border-style search-input"
                           type="search" placeholder="Поиск" aria-label="Search">
                </form>
                <div v-if="guest" class="dropdown my-2 my-lg-0">
                    <a class="nav-link dropdown-toggle text-secondary" href="#" id="dropdownMenu2" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Вход
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <form @submit.prevent="login" class="px-4 py-3">
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">Email address</label>
                                <input v-model="email" name="email" type="email" class="form-control" id="exampleDropdownFormEmail1"
                                       placeholder="email@example.com">
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">Password</label>
                                <input v-model="password" name="password" type="password" class="form-control"
                                       id="exampleDropdownFormPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input v-model="remember_me" type="checkbox" name="remember" class="form-check-input" id="dropdownCheck"
                                           checked value="true">
                                    <label class="form-check-label" for="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>

                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">New around here? Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>
                </div>
                <ul v-else class="topmenu">
                    <li>
                        <div class="d-flex" id="dropdownMenu3" href="#" role="button" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                            <a href="#" class="text-secondary my-auto nav-link">
                            </a>
                            <img class="img-test " src="" alt="(">
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
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data: () => {
            return {
                email: null,
                password: null,
                remember_me: true,
            }
        },
        created() {
            axios.get('/login').then(user => {
                console.log(user)
                this.$store.commit('auth/setUser', user);
            })
            console.log(this.$store.getters['auth/user'])
        },
        methods: {
            logout() {
                axios.post('/api/auth/logout').then(({success}) => {
                    if (success) {
                        this.$store.commit("auth/logout")
                    }
                })
            },
            login() {
                axios.get('/sanctum/csrf-cookie').then(_ => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password,
                        remember_me: this.remember_me,

                    }).then(({data}) => {
                        if (data)
                            this.$store.commit('auth/setUser', data);
                        else
                            console.error("Not authenticated")
                    })
                })
            }
        },
        computed: {
            guest() {
                return this.$store.getters['auth/user/isGuest']
            },
            isAdmin() {
                return this.$store.getters['auth/user/isAdmin']
            }
        }
    }
</script>

<style scoped>

</style>
