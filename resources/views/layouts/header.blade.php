<header class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <a class="navbar-brand" href="/">Allete</a>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="{{ route('catalog') }}" class="nav-link">Каталог</a>
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
                <input class="form-control mr-sm-2 border border-dark custom-border-style search-input" type="search" placeholder="Поиск" aria-label="Search">
            </form>
            @guest
                <div class="dropdown my-2 my-lg-0">
                    <a class="nav-link dropdown-toggle text-secondary" href="#" id="dropdownMenu2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Вход
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <form method="POST" action="{{ route('login') }}" class="px-4 py-3">
                            @csrf
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">Email address</label>
                                <input name="email" type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">Password</label>
                                <input name="password" type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                    <label class="form-check-label" for="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            @error('email')<a class="dropdown-item" href="#">{{ $massage ?? '' }}</a>@enderror
                            @error('password')<a class="dropdown-item" href="#">{{ $message ?? '' }}</a>@enderror
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">New around here? Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>
                </div>
                @else
                <ul class="topmenu">
                    <li>
                        <div class="d-flex" id="dropdownMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <a href="#" class="text-secondary my-auto nav-link">
                                {{Auth::user()->login}}
                            </a>
                            <img class="img-test " src="{{asset("contact.png")}}" alt="(">
                        </div>
                        <ul class="submenu">
                            <li class="submenu-border-top"><a href="">Мой кабинет</a></li>
                            <li><a href="">Моя корзина</a></li>
                            <li><a href="">Мои заказы</a></li>
                            @if(Gate::allows("isAdmin"))
                                <li><a href="" class="submenu-link">Администрирование</a>
                                    <ul class="submenu">
                                        <li><a href="{{route('news.table')}}">Новости</a></li>
                                        <li><a href="">Товары</a></li>
                                        <li><a href="">меню третьего уровня</a></li>
                                    </ul>
                                </li>
                            @endif
                            <li><div class="divider"></div></li>
                            <li class="submenu-border-bot">
                                <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                    @csrf
                                    <button class="dropdown-item submenu-border-bot" type="submit" name="logout" >Выйти</button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
                @include('Admin.layouts.admin_panel')
            @endguest
        </div>
    </nav>
</header>


