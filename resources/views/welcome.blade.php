<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;500;700&family=Merienda+One&family=Playfair+Display:ital,wght@0,500;1,900&display=swap"
        rel="stylesheet">



    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#00a300">
    <meta name="theme-color" content="#ffffff">


    <meta name="keywords"
        content="Be, Local, Madeira, madeira, island, canyoning, canionismo, caminhada, hiking, adventure, experience, aventura, coasteering, hiking, caminhada, passeio, activity, atividade, bicicleta">
    <meta name="author" content="Rúben Freitas">
    <meta name="description"
        content="Be Local Madeira aims to provide the most dynamic and genuine experiences the Island has to offer. With us you will experience nature at its most stunning, creating adventures that will stay with you forever!">

    <title>Be Local Madeira</title>
</head>

<style>
    html,
    body,
    #index {
        height: 100%;
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        scroll-behavior: smooth;
    }



    body {
        margin: 0;
        position: relative;
    }
</style>


<script>
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
</script>

<body>
    <div id="index">
        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>