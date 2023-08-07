import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var mySwiper = new Swiper('.swiper-container', {
    // Opción para definir el número de elementos a mostrar en la pantalla en cada momento
    slidesPerView: 3,
    // Opción para habilitar el cambio automático entre los elementos del carrusel
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Opción para permitir el desplazamiento manual mediante gestos en dispositivos táctiles
    touchMoveStopPropagation: true,
  });