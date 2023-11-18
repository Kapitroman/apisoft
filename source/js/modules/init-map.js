const initYM = () => {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.65996509305779,37.543971082104704],
      zoom: 16,
      controls: []
    }, { suppressMapOpenBlock: true });

    var myPlacemark = new ymaps.Placemark([55.661862, 37.546561], {
      hintContent: 'ApiSoft',
      balloonContent: 'Профсоюзная улица, 57'}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/myIcon.png',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38]
    });

    myMap.geoObjects
        .add(myPlacemark)
  });
}

export {initYM};
