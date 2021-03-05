<template>
  <div>
    <div class="title-section">
      <div class="container d-flex align-items-center">
        <div class="row">
          <div class="col">
            <h1>SOLUCIONES IT</h1>
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
                    <li class="nav-item" v-for="sol in services" :key="sol.id">
                      <router-link
                        class="nav-link active services-item-a"
                        :to="'/services/' + sol.name"
                      >
                        {{ sol.title }}
                      </router-link>
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
              <ul>
                <li v-for="p in getProducts" :key="p.id">
                  {{ p.descProduct }}
                </li>
              </ul>
              <h4 class="heading-font heading-four-settings services-paragraph">
                Beneficios
              </h4>
              <ul>
                <li v-for="a in getAdvantages" :key="a.id">
                  {{ a.descAdvantages }}
                </li>
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
    name(name, old) {
      this.solutions = this.services.find(
        (element) => element.name === this.name
      );
    },
  },
  data() {
    return {
      services: this.$store.getters['services/services'],
      solutions: null,
      index: 0,
    };
  },
  computed: {
    getTitle() {
      return this.solutions.title;
    },
    getImage() {
      return this.solutions.image;
    },
    getTitleParagraph() {
      return this.solutions.titleDescription;
    },
    getParagraph() {
      return this.solutions.description;
    },
    getProducts() {
      return this.solutions.products;
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