<template>
  <div>
    <div class="general-title-bg">
      <div class="general-title-setup">
        <div class="container">
          <h1 class="page-title">SOLUCIONES IT</h1>
        </div>
      </div>
    </div>
    <div class="services-body-div">
      <div class="container">
        <div class="row text-left">
          <div class="col-sm-12 col-md-4">
            <div class="services-collapse-menu">
              <div>
                <a
                  class="btn"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="collapse-1"
                  href="#collapse-1"
                  role="button"
                  >SERVICIOS</a
                >
                <div class="collapse show" id="collapse-1">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" href="#" @click="value(0)"
                        >Networking</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" @click="value(1)"
                        >Seguridad de Redes</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" @click="value(2)"
                        >Redes Inalámbricas</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" @click="value(3)"
                        >Colaboración</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" href="#"
                        >First Item</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-8">
            <div>
              <h1 class="heading-font">{{ getTitle }}</h1>
              <img class="img-fluid services-img" :src="getImage" />
              <h4 class="heading-font heading-four-settings services-paragraph">
                {{ getTitleParagraph }}
              </h4>
              <p class="services-paragraph">
                {{ getParagraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advantages-bg">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <h2 class="advantages-title">Beneficios</h2>
          </div>
        </div>
        <div class="row d-flex text-center">
          <base-card
            v-for="avd in getAdvantages"
            :key="avd.id"
            :icon="avd.icon"
            :description="avd.descAdvantages"
          >
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Networking",
          image:
            "https://images.freeimages.com/images/large-previews/c5a/chenbro-rackmount-19-inch-1512529.jpg",
          titleDescription: "Arquitectura de Routing & Switching",
          description:
            " Garantizamos la comunicación de datos e información en la red de nuestros clientes, usando las mejores prácticas del mercado otorgando diseños y soluciones caracterizadas por alta disponibilidad y escalabilidad.",
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Garantizamos el acceso a la información",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Soluciones en alta Disponibilidad",
            },
            {
              id: "adv1",
              icon: "fa fa-database",
              descAdvantages: "Acceso agil a su informacion",
            },
          ],
        },
        {
          id: 2,
          title: "Seguridad de Redes",
          image:
            "https://images.unsplash.com/photo-1611095971113-9f7542655338?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          titleDescription: "Arquitectura de Seguridad",
          description:
            "Proteger la información de nuestros clientes, con servicios de seguridad de borde, inspección de paquetes, filtrado de contenido, control de usuarios y accesos, IDS, IPS.",
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Protección de la información, para que sus empleados y clientes accedan a sus servicios de forma segura.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Controlar la confidencialidad de la información corporativa.",
            },
            {
              id: "adv1",
              icon: "fa fa-database",
              descAdvantages: "Protección a su empresa contra ataques.",
            },
          ],
        },
        {
          id: 3,
          title: "Redes Inalámbricas",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          titleDescription: "Arquitectura de Conectividad Inalámbrica",
          description:
            "Brindando conectividad a usuarios móviles, importantes para el negocio de nuestros clientes, optimizando sus operaciones, dando acceso a su información y sobre los servicios que ofrece.",
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Disponibilidad de la información en cualquier lugar de la empresa.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Acceso a su información de forma segura y confiable.",
            },
            {
              id: "adv1",
              icon: "fa fa-database",
              descAdvantages: "Movilidad del usuario, Roaming.",
            },
          ],
        },
        {
          id: 4,
          title: "Colaboración",
          image:
            "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=966&q=80",
          titleDescription: "Arquitectura de Colaboración",
          description:
            "Herramientas corporativas para que puedan colaborar entre sí, usando telefonía IP, mensajería instantánea, conferencias de audio y video, salas de video, tablets o la combinación de las anteriores en una sola plataforma.",
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Reducción de costos en comunicaciones con otras sucursales.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Integración con otras marcas.",
            },
            {
              id: "adv1",
              icon: "fa fa-database",
              descAdvantages: "Aumentar los procesos operativos con Tele-Trabajo.",
            },
          ],
        },
      ],
      index: 0
    };
  },
  computed: {
    getTitle() {
      return this.services[this.index].title;
    },
    getImage() {
      console.log(this.services[0].image);
      return this.services[this.index].image;
    },
    getTitleParagraph() {
      return this.services[this.index].titleDescription;
    },
    getParagraph() {
      return this.services[this.index].description;
    },
    getAdvantages() {
      return this.services[this.index].advantages;
    },
  },
  methods: {
    value(num) {
      this.index = num;
    }
  }
};
</script>

<style scoped>
@import url(../../assets/css/services.css);
</style>