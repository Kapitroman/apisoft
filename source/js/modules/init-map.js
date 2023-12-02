const initYM = () => {
  const map = document.querySelector('#map');

  if(!map) {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.65996509305779,37.543971082104704],
      zoom: 16,
      controls: []
    },
    {
      suppressMapOpenBlock: true
    });

    var myPlacemark = new ymaps.Placemark([55.661862, 37.546561], {
      hintContent: 'ApiSoft',
      balloonContent: 'Профсоюзная улица, 57'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/pin-map.png',
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -30]
    });

    myMap.geoObjects.add(myPlacemark)
  });
}

export {initYM};
