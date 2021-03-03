<template>
  <div>
    <div class="title-section">
      <div class="container d-flex align-items-center">
        <div class="row">
          <div class="col">
            <h1>CONTACTO</h1>
          </div>
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
                      <router-link
                        class="nav-link active services-item-a"
                        to="/services/networking"
                      >
                        Networking
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link active services-item-a"
                        to="/services/seguridad_de_redes"
                      >
                        Seguridad de Redes
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active services-item-a"
                        @click="value(2)"
                        >Redes Inalámbricas</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active services-item-a"
                        @click="value(3)"
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
              <h4 class="heading-font heading-four-settings services-paragraph">
                Beneficios
              </h4>
              <ul>
                <li v-for="a in getAdvantages" :key="a.id">{{ a.descAdvantages }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  watch: {
    name(name, old){
      this.solutions = this.services.find(
      (element) => element.name === this.name
    );
    }
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "networking",
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
          name: "seguridad_de_redes",
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
              descAdvantages:
                "Protección de la información, para que sus empleados y clientes accedan a sus servicios de forma segura.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Controlar la confidencialidad de la información corporativa.",
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
          name: "redes_inalambricas",
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
              descAdvantages:
                "Disponibilidad de la información en cualquier lugar de la empresa.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Acceso a su información de forma segura y confiable.",
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
          name: "colaboracion",
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
              descAdvantages:
                "Reducción de costos en comunicaciones con otras sucursales.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Integración con otras marcas.",
            },
            {
              id: "adv1",
              icon: "fa fa-database",
              descAdvantages:
                "Aumentar los procesos operativos con Tele-Trabajo.",
            },
          ],
        },
      ],
      solutions: null,
      index: 0,
    };
  },
  computed: {
    getTitle() {
      return this.solutions.title;
    },
    getImage() {
      console.log(this.solutions.image);
      return this.solutions.image;
    },
    getTitleParagraph() {
      return this.solutions.titleDescription;
    },
    getParagraph() {
      return this.solutions.description;
    },
    getAdvantages() {
      return this.solutions.advantages;
    },
  },
  methods: {
    value(name) {
      this.solutions = this.services.find((el) => el.name === name);
    },
  },
  created() {
    console.log(this.name);
    this.solutions = this.services.find(
      (element) => element.name === this.name
    );
  },
};
</script>

<style scoped>
@import url(../../assets/css/services.css);

h1 {
  font-weight: bold;
}

div.title-section {
  background-color: #004097;
  color: #fff;
  height: 120px;
  display: flex;
}
.route-enter-active {
  transition: all 0s ease-out;
}
.route-leave-active {
  transition: all 0s ease-in;
}
</style>