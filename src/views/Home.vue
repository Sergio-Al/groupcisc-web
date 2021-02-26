<template>
  <main>
    <section
      class="d-flex justify-content-center align-items-center main-section"
      id="hero"
    >
      <div class="jumbotron">
        <h1 class="d-inline-block main-jumbotron-heading">
          <strong>SOLUCIONES CORPORATIVAS</strong>
        </h1>
        <p>Centro Empresarial S.R.L.<br /></p>
      </div>
    </section>
    <section id="services" class="services-section">
      <div class="text-center services-heading">
        <h1 class="text"><strong>SOLUCIONES IT</strong></h1>
      </div>
      <div class="container services-container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card services-card">
              <div class="card-body">
                <i class="fa fa-mixcloud services-card-icon"></i>
                <h4 class="card-title card-title-custom">COLABORACIÓN</h4>
                <p class="card-text">
                  <br />Solución que ofrecemos para administrar los recursos de
                  su infraestructura TI.<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card services-card-exp">
              <div class="card-body">
                <i class="fa fa-mixcloud services-card-icon"></i>
                <h4 class="card-title card-title-custom">NETWORKING</h4>
                <p class="card-text">
                  <br />Solución que ofrecemos para administrar los recursos de
                  su infraestructura TI.<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card services-card">
              <div class="card-body">
                <i class="fa fa-mixcloud services-card-icon"></i>
                <h4 class="card-title card-title-custom">SERVIDORES</h4>
                <p class="card-text">
                  <br />Solución que ofrecemos para administrar los recursos de
                  su infraestructura TI.<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card services-card-exp">
              <div class="card-body">
                <i class="fa fa-mixcloud services-card-icon"></i>
                <h4 class="card-title card-title-custom">SEGURIDAD</h4>
                <p class="card-text">
                  <br />Solución que ofrecemos para administrar los recursos de
                  su infraestructura TI.<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card services-card">
              <div class="card-body">
                <i class="fa fa-mixcloud services-card-icon"></i>
                <h4 class="card-title card-title-custom">INFRAESTRUCTURA</h4>
                <p class="card-text">
                  <br />Solución que ofrecemos para administrar los recursos de
                  su infraestructura TI.<br /><br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="products" class="products-section">
      <div class="text-center products-heading">
        <h1><strong>PRODUCTOS</strong></h1>
      </div>
      <carousel>
        <slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">Servidores Torre Basico y Avanzado {{ slide }}</div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>


      <!-- <div class="simple-slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center swiper-slide"
              style="
                background: url('../assets/img/Products/almacenamiento.jpg')
                  center center / cover no-repeat;
              "
            >
              <div style="padding: 0px 5px">
                <h1 class="text-center products-slide">
                  <strong>Servidores Torre Básico</strong><br /><strong
                    >y Avanzado</strong
                  >
                </h1>
              </div>
            </div>
            <div
              class="d-flex justify-content-center align-items-center swiper-slide"
              style="
                background: url('../assets/img/Products/infraestructura.jpg')
                  center center / cover no-repeat;
              "
            >
              <div>
                <h1 class="products-slide">Heading</h1>
              </div>
            </div>
            <div
              class="d-flex justify-content-center align-items-center swiper-slide"
              style="
                background: url('../assets/img/Products/hero-section.jpg')
                  center center / cover no-repeat;
              "
            >
              <div>
                <h1 class="products-slide">Heading</h1>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div> -->
    </section>
    <section id="counter" class="counting-section">
      <div class="container-fluid text-white">
        <div class="row stadistic-row">
          <div
            class="col-md-6 col-lg-4 text-center pb-5 pt-5 number-item love_counter"
          >
            <h1 class="love_count" style="font-size: 70px">
              <strong>3000</strong>
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">Clientes</h4>
          </div>
          <div class="col-md-6 col-lg-4 text-center pb-5 pt-5 love_counter">
            <h1 class="love_count" style="font-size: 70px">
              <strong>8</strong>
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">
              Años de experiencia
            </h4>
          </div>
          <div class="col-lg-4 text-center pb-5 pt-5 love_counter">
            <h1 class="love_count" style="font-size: 70px">
              <strong>300</strong>
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">Profesionales</h4>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 style="color: #004097"><strong>ACERCA DE GROUPCISC</strong></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 text-center about-column">
            <div class="about-card">
              <img
                class="rounded-circle"
                src="../assets/img/About/ProfileMission.jpg"
              />
              <h2 class="card-about-title">HISTORIA</h2>
              <p class="text-left">
                <br />Somos una organización dedicada a la comercialización de
                soluciones en el campo de la Tecnología de la Información y
                Telecomunicaciones, abarcando aspectos de diseño, instalación y
                mantenimiento de equipos de comunicación IP, soluciones
                integradas para transmisión de voz, datos, sistemas de
                almacenamiento de datos, cableado estructurado y otros.<br />
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 text-center about-column">
            <div class="about-card">
              <img
                class="rounded-circle"
                src="../assets/img/About/ProfileMission.jpg"
              />
              <h2 class="card-about-title">MISIÓN</h2>
              <p class="text-left">
                <br />Continuar siendo en todo momento el apoyo tecnológico
                hacia todos nuestros clientes, ofreciendo siempre
                responsabilidad empresarial y compromiso de calidad a cada una
                de sus necesidades tecnológicas.<br />
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 text-center about-column">
            <div class="about-card">
              <img
                class="rounded-circle"
                src="../assets/img/About/ProfileMission.jpg"
              />
              <h2 class="card-about-title">VISIÓN</h2>
              <p class="text-left">
                <br />Profesionales comprometidos y dedicados a proveer
                soluciones e innovación tecnológica hacia nuestros clientes
                logrando tecnologizar y satisfacer sus necesidades en las
                tecnologías de información.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="brands" class="brands-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-center branding-title">
              <strong>NUESTROS COLABORADORES</strong>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="brands">
              <a href="#">
                <img src="../assets/img/UI/instacart.png" /><img
                  src="../assets/img/UI/kickstarter.png" /><img
                  src="../assets/img/UI/lyft.png" /><img
                  src="../assets/img/UI/shopify.png" /><img
                  src="../assets/img/UI/pinterest.png" /><img
                  src="../assets/img/UI/twitter.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import jQuery from "jquery";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // for the Hero Title
    const text = document.querySelector(".main-jumbotron-heading");
    console.log(text.textContent);
    const content = text.textContent;
    const arraySplitted = content.split("");
    text.textContent = "";

    for (let i = 0; i < arraySplitted.length; i++) {
      text.innerHTML += "<span>" + arraySplitted[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = text.querySelectorAll("span")[char];
      span.classList.add("fading");
      char++;
      if (char === content.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }

    // for the counter
    jQuery(window).scroll(startCounter);
    function startCounter() {
      var hT = jQuery(".love_counter").offset().top,
        hH = jQuery(".love_counter").outerHeight(),
        wH = jQuery(window).height();
      if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery(".love_count").each(function () {
          var $this = jQuery(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter) + "+");
              },
            }
          );
        });
      }
    }
  },
};
</script>


<style scoped>
@import url(../assets/css/Simple-Slider.css);
@import url(../assets/css/Brands.css);

.services-card-icon-exp {
  font-size: 3em;
  justify-content: center;
}

.services-card-icon {
  font-size: 3em;
  justify-content: center;
  margin: 10px 0px;
  margin-bottom: 10px;
}

.services-card-exp {
  border: solid;
  background: #ffffff;
  color: #c3001a;
  border-radius: 10px;
  transition: 0.3s;
  margin: 5px 0px;
}

.services-card {
  background: #c3001a;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  transition: 0.3s;
  margin: 5px 0px;
}

.services-card-exp:hover {
  box-shadow: 0px 2px 17px rgb(126, 125, 125);
}

.services-card:hover {
  box-shadow: 0px 2px 17px rgb(126, 125, 125);
}

.carousel__item {
  height: 500px;
  width: 100%;
  background: url(../assets/img/Products/almacenamiento.jpg) center center / cover no-repeat;
  color: rgb(248, 248, 248);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.products-section {
  padding: 0px 20px;
}
</style>

