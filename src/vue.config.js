module,exports = {
    //Директория, которая будет считаться корневой
    publicPath: '/',
    //Vue в продакт оставляет карты, где описаны все наши компоненты, что палит проект.
    //Эта строка отключает данную опцию и карты в продакте после билда не будут.
    //Карты уменьшают скорость загрузки проекта
    productionSourceMap: false,
    //Говорим создать директорию assets, куда положит js, css, img, fonts (если ее нет!)
    assetsDir: 'assets',
};