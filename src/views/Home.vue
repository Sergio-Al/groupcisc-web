<template>
  <main>
    <section
      class="d-flex justify-content-center align-items-center main-section"
      id="hero"
    ></section>
    <section id="services" class="services-section">
      <div class="text-center services-heading">
        <h1 class="text"><strong>SOLUCIONES IT</strong></h1>
      </div>
      <div class="container carousel-custom">
        <carousel :items-to-show="3" :wrap-around="true">
          <slide v-for="slide in resourcesSolutions.length" :key="slide">
            <div class="card services-card-carousel">
              <router-link
                :to="'/services/' + resourcesSolutions[slide - 1].name"
              >
                <div class="card-body">
                  <img :src="resourcesSolutions[slide - 1].image" alt="" />
                  <h4 class="card-title card-title-custom">
                    {{ resourcesSolutions[slide - 1].title }}
                  </h4>
                  <p class="card-text">
                    <br />{{
                      resourcesSolutions[slide - 1].description
                    }}.<br /><br />
                  </p>
                </div>
              </router-link>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="container services-container">
        <carousel :items-to-show="1" :wrap-around="true">
          <slide v-for="slide in resourcesSolutions.length" :key="slide">
            <div class="card services-card-carousel">
              <router-link
                :to="'/services/' + resourcesSolutions[slide - 1].name"
              >
                <div class="card-body">
                  <img :src="resourcesSolutions[slide - 1].image" alt="" />
                  <h4 class="card-title card-title-custom">
                    {{ resourcesSolutions[slide - 1].title }}
                  </h4>
                  <p class="card-text">
                    <br />{{
                      resourcesSolutions[slide - 1].description
                    }}.<br /><br />
                  </p>
                </div>
              </router-link>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </section>
    <section id="products" class="products-section">
      <router-link to="/services/networking">
        <div class="text-center products-heading">
          <h1><strong>PRODUCTOS</strong></h1>
        </div>
      </router-link>
      <div class="container">
        <carousel>
          <slide v-for="x in resources.length" :key="x">
            <div
              class="carousel__item"
              :style="{
                background:
                  'url(' +
                  resources[x - 1].imageUrl +
                  ') center / cover no-repeat',
              }"
            ></div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </section>
    <section id="counter" class="counting-section">
      <div class="container-fluid text-white">
        <div class="row stadistic-row">
          <div
            class="col-md-6 col-lg-4 text-center pb-5 pt-5 number-item love_counter"
          >
            <h1 id="clients" style=" font-size: 70px">
              <strong class="love_count">3000</strong>+
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">Clientes</h4>
          </div>
          <div class="col-md-6 col-lg-4 text-center pb-5 pt-5 love_counter">
            <h1 id="experience" style="font-size: 70px">
              <strong class="love_count">8</strong>+
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">
              Años de experiencia
            </h4>
          </div>
          <div class="col-lg-4 text-center pb-5 pt-5 love_counter">
            <h1 id="cases" style="font-size: 70px">
              <strong class="love_count">300</strong>+
            </h1>
            <h4 style="color: #ffffff; margin-top: -6px">Casos de Éxito</h4>
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
            <div
              class="d-flex flex-column justify-content-between align-items-center about-card"
            >
              <div>
                <img
                  class="rounded-circle"
                  src="../assets/img/About/aboutUsSection.png"
                />
                <h2 class="card-about-title">NOSOTROS</h2>
                <p class="text-left">
                  <br />Somos una organización dedicada a la comercialización de
                  soluciones en el campo de la Tecnología de la Información y
                  Telecomunicaciones, abarcando aspectos de diseño, instalación
                  y mantenimiento de equipos de comunicación IP, soluciones
                  integradas para transmisión de voz, datos, sistemas de
                  almacenamiento de datos, cableado estructurado y otros.<br />
                </p>
              </div>
              <router-link to="/about">
                <button class="btn about-button" type="button">
                  Ver Más
                </button>
              </router-link>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 text-center about-column">
            <div
              class="d-flex flex-column justify-content-between align-items-center about-card"
            >
              <div>
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
              <router-link to="/about">
                <button class="btn about-button" type="button">
                  Ver Más
                </button>
              </router-link>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 text-center about-column">
            <div
              class="d-flex flex-column justify-content-between align-items-center about-card"
            >
              <div>
                <img
                  class="rounded-circle"
                  src="../assets/img/About/ProfileVision.jpg"
                />
                <h2 class="card-about-title">VISIÓN</h2>
                <p class="text-left">
                  <br />Profesionales comprometidos y dedicados a proveer
                  soluciones e innovación tecnológica hacia nuestros clientes
                  logrando tecnologizar y satisfacer sus necesidades en las
                  tecnologías de información.<br />
                </p>
              </div>
              <router-link to="/about">
                <button class="btn about-button" type="button">
                  Ver Más
                </button>
              </router-link>
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
              <strong>NUESTROS PARTNERS</strong>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-center brands">
              <a href="https://www.cisco.com/" target="_blank">
                <img
                  class="img-fluid logos"
                  src="../assets/img/UI/cisco-logo.png"
                />
              </a>
              <a
                href="http://www1.la.dell.com/content/default.aspx?c=bo&l=es&s=&s=gen&~ck=cr"
                target="_blank"
                ><img
                  class="img-fluid logos"
                  src="../assets/img/UI/dell-logo.png"
              /></a>
              <a href="https://www.fortinet.com/" target="_blank"
                ><img
                  class="img-fluid logos"
                  src="../assets/img/UI/fortinet-logo.png"
                />
              </a>
              <a href="https://www.sophos.com/en-us.aspx" target="_blank">
                <img
                  class="img-fluid logos"
                  src="../assets/img/UI/sophos-logo.png"
                />
              </a>

              <a href="https://www.veeam.com/" target="_blank"
                ><img
                  class="img-fluid logos"
                  src="../assets/img/UI/veeam-logo.png"
              /></a>

              <a href="https://www.vmware.com/" target="_blank">
                <img
                  class="img-fluid logos"
                  src="../assets/img/UI/vmware-logo.png"
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

//Local Images
// For Solutions Carousel
import ColaboracionImage from "../assets/img/Solutions/colaboracion-icon.png";
import InfraestructuraImage from "../assets/img/Solutions/infraestructura-icon.png";
import NetworkingImage from "../assets/img/Solutions/networking-icon.png";
import SeguridadImage from "../assets/img/Solutions/seguridad-icon.png";
import ServidoresImage from "../assets/img/Solutions/servidores-icon.png";

// For Products Carousel
import ProductImage1 from "../assets/img/Products/banner-cableado.jpeg";
import ProductImage2 from "../assets/img/Products/solucion-networking.png";
import ProductImage3 from "../assets/img/Products/solucion-colaboracion.png";
import ProductImage4 from "../assets/img/Products/solucion-servidores.png";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      resources: [
        {
          id: 1,
          imageUrl: ProductImage1,
        },
        {
          id: 2,
          imageUrl: ProductImage2,
        },
        {
          id: 3,
          imageUrl: ProductImage3,
        },
        {
          id: 4,
          imageUrl: ProductImage4,
        },
      ],
      resourcesSolutions: [
        {
          id: 1,
          icon: "fa fa-usb services-card-icon",
          image: ColaboracionImage,
          name: "colaboracion",
          title: "COLABORACIÓN",
          description:
            "Herramientas corporativas para que puedan colaborar entre sí, en una sola plataforma",
        },
        {
          id: 2,
          icon: "fa fa-mixcloud services-card-icon",
          image: NetworkingImage,
          name: "networking",
          title: "NETWORKING",
          description:
            "Comunicación de datos e información en la red de nuestros clientes, usando las mejores prácticas del mercado otorgando diseños y soluciones.",
        },
        {
          id: 3,
          icon: "fa fa-server services-card-icon",
          image: ServidoresImage,
          name: "soluciones_de_servidores",
          title: "SERVIDORES",
          description:
            "Extienda los beneficios de la tecnología del almacenamiento distribuido a mas aplicaciones y casos de uso.",
        },
        {
          id: 4,
          icon: "fa fa-lock services-card-icon",
          image: SeguridadImage,
          name: "soluciones_en_seguridad_electronica",
          title: "SEGURIDAD",
          description:
            "Nuestras soluciones de seguridad le brindan protección a través del uso de red extendida.",
        },
        {
          id: 5,
          icon: "fa fa-building-o services-card-icon",
          image: InfraestructuraImage,
          name: "soluciones_de_infraestructura",
          title: "INFRAESTRUCTURA",
          description:
            "Las soluciones y servicios ofrecidos por la empresa permiten acelerar la innovación, reducir costes y complejidad.",
        },
      ],
      // for breakpoint slides
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        400: {
          itemsToShow: 2,
        },
        700: {
          itemsToShow: 3.5,
        },
        1024: {
          itemsToShow: 4.5,
        },
      },
    };
  },
  computed: {
    getIcon(num) {
      return this.resourcesSolutions[num].icon;
    },
  },
  methods: {},
  mounted() {
    // for the counter
    jQuery(window).scroll(startCounter);
    function startCounter() {
      var hT = jQuery(".love_counter").offset().top,
        hH = jQuery(".love_counter").outerHeight(),
        wH = jQuery(window).height();
      if (
        jQuery(window).scrollTop() >
        parseInt(hT) + parseInt(hH) - parseInt(wH)
      ) {
        jQuery(window).off("scroll", startCounter);
        jQuery(".love_count").each(function() {
          var $this = jQuery(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 2000,
              easing: "swing",
              step: function() {
                $this.text(Math.ceil(parseInt(this.Counter) + 1));
              },
            }
          );
        });
      }
    }
  },
  beforeUnmount() {
    jQuery(window).unbind();
    console.log("beforeunmounting");
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

.services-card-carousel {
  background: #fff6f6;
  color: #707070;
  border-radius: 10px;
  border-color: red;
  transition: 0.3s;
  height: 100%;
  margin: 5px 0px;
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

.services-card.services:hover {
  box-shadow: 0px 2px 17px rgb(126, 125, 125);
}

.services-card-carousel:hover {
  box-shadow: 0px 2px 17px rgb(126, 125, 125);
}

@media (max-width: 768px) {
  .carousel-custom {
    display: none;
  }
}

.services-container {
  display: none;
}

@media (max-width: 768px) {
  .services-container {
    display: initial;
    padding: 10px;
  }
}

.carousel__item {
  height: 500px;
  width: 100%;
  color: rgb(248, 248, 248);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .container .carousel__item {
    height: 300px;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 411px) {
  .container .carousel__item {
    height: 180px;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 320px) {
  .container .carousel__item {
    height: 150px;
    padding: 0;
    margin: 0;
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.btn.about-button:hover {
  width: auto;
  border: none;
  background-color: #004097;
  border-radius: 20px;
  color: white;
}

.btn.about-button {
  width: auto;
  text-decoration: none;
  color: #004097;
  border-color: #004097;
  border-radius: 20px;
  transition: 0.3s ease-in;
}

a:hover {
  text-decoration: none;
}

.card-body {
  color: #707070;
}

.card-body img {
  width: 30%;
  align-content: center;
  margin-bottom: 10px;
}

.brands a {
  display: inline;
}

.brands a img {
  width: 10%;
}

@media (max-width: 768px) {
  .brands a img {
    width: 30%;
  }
}
</style>
