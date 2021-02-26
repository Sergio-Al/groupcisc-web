<template>
  <div>
    <div class="general-title-bg">
      <div class="general-title-setup">
        <h1 class="text-center page-title">Servicios</h1>
      </div>
    </div>
    <div class="services-body-div">
      <div class="container">
        <div class="row text-left">
          <div class="col-sm-12 col-md-4">
            <div class="services-collapse-menu">
              <h1>Soluciones</h1>
              <div>
                <a
                  class="btn"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="collapse-1"
                  href="#collapse-1"
                  role="button"
                  >Lo que ofrecemos</a
                >
                <div class="collapse show" id="collapse-1">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" href="#"
                        >First Item</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active services-item-a" href="#"
                        >First Item</a
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
        <div class="row d-flex">
          <base-card 
              v-for="avd in getAdvantages" 
              :key="avd.id" 
              :icon="avd.icon"
              :description="avd.descAdvantages">
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
      ],
    };
  },
  computed: {
    getTitle() {
      return this.services[0].title;
    },
    getImage() {
      console.log(this.services[0].image);
      return this.services[0].image;
    },
    getTitleParagraph() {
      return this.services[0].titleDescription;
    },
    getParagraph() {
      return this.services[0].description;
    },
    getAdvantages() {
      return this.services[0].advantages;
    },
  },
};
</script>

<style scoped>
</style>