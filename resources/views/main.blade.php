<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
    <body>
        <a>Наши юзеры</a>
        <ul>
            @foreach($users as $user)
                <li>
                    <a href="main/{{$user->login}}" >
                        <?= $user->login ."\t". $user->fio; ?>
                    </a>
                </li>
            @endforeach
        </ul>
    </body>
</html>
