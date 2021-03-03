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
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Garantizamos el acceso a la información",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Soluciones en alta Disponibilidad",
            },
            {
              id: "adv3",
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
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Protección de la información, para que sus empleados y clientes accedan a sus servicios de forma segura.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Controlar la confidencialidad de la información corporativa.",
            },
            {
              id: "adv3",
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
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Disponibilidad de la información en cualquier lugar de la empresa.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Acceso a su información de forma segura y confiable.",
            },
            {
              id: "adv3",
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
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Reducción de costos en comunicaciones con otras sucursales.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Integración con otras marcas.",
            },
            {
              id: "adv3",
              icon: "fa fa-database",
              descAdvantages:
                "Aumentar los procesos operativos con Tele-Trabajo.",
            },
          ],
        },
        {
          id: 5,
          name: "soluciones_de_servidores_cisco",
          title: "Servidores y Almacenamiento Cisco",
          image:
            "https://images.unsplash.com/photo-1584278050763-2fbf1864e4c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          titleDescription: "Arquitectura de Servidores y Almacenamiento",
          description:
            "Extienda los beneficios de la tecnología del almacenamiento distribuido a mas aplicaciones y casos de uso contando con la siguiente tecnología:",
          products: [
            {
              id: "p1",
              descProduct: "Servidores Blade UCS de la Serie B.",
            },
            {
              id: "p2",
              descProduct: "Servidores en rack UCS de la Serie C.",
            },
            {
              id: "p3",
              descProduct: "Servidores de Almacenamiento UCS de la serie S.",
            },
            {
              id: "p4",
              descProduct: "Nodo Cisco HyperFlex HX220C M4.",
            },
            {
              id: "p5",
              descProduct: "Nodo Cisco HyperFlex HX240c M4.",
            },
            {
              id: "p6",
              descProduct:
                "Nodo Cisco HyperFlex HX240c M4 con servidores Blade Cisco UCS B200",
            },
          ],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Alta Capacidad para cargas de trabajo a máxima capacidad de almacenamiento.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Ampliar el cómputo y el almacenamiento de manera independiente.",
            },
          ],
        },
        {
          id: 6,
          name: "soluciones_de_servidores_dell_emc",
          title: "Servidores y Almacenamiento DELL EMC",
          image:
            "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1170&q=80",
          titleDescription: "Arquitectura de Servidores y Almacenamiento",
          description:
            "Como base de una solución de TI adaptable y completa, los servidores brindan agilidad y confiabilidad superior, eficiencia operativa excepcional y rendimiento superior en cualquier escala. contando con la siguiente tecnología:",
          products: [
            {
              id: "p1",
              descProduct: "Servidores Torre Básico y Avanzado.",
            },
            {
              id: "p2",
              descProduct: "Servidores para rack de 1 – 2 y 4 Sockets.",
            },
            {
              id: "p3",
              descProduct: "Servidores PowerEdge Serie FX. ",
            },
            {
              id: "p4",
              descProduct: "Servidores PowerEdge Serie M. ",
            },
            {
              id: "p5",
              descProduct: "Servidores PowerEdge Serie C. ",
            },
          ],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Informatica de alto rendimiento.",
            },
            {
              id: "adv1",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Procesamiento empresarial y soporte para toma de decisiones.",
            },
          ],
        },
        {
          id: 7,
          name: "integracion_de_soluciones",
          title: "Integración",
          image:
            "https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          titleDescription: "",
          description:
            "Desde pocas máquinas virtuales que se ejecutan en computadoras físicas únicas hasta centros de servidores completos a través de servidores de raíz múltiple, la virtualización optimiza las inversiones y la estructura de red mediante la reducción del exceso de servidores subutilizados. La virtualización le ayuda a obtener beneficios a gran escala como utilización mejorada, recursos de soporte optimizados, espacio y costos reducidos, junto con una infraestructura sólida que puede brindar mayor disponibilidad y resistencia.",
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages: "Almacenamiento Virtual.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages: "Virtualización en distintas Plataformas.",
            },
            {
              id: "adv3",
              icon: "fa fa-database",
              descAdvantages:
                "Aumentar los procesos operativos con Tele-Trabajo.",
            },
            {
              id: "adv4",
              icon: "fa fa-database",
              descAdvantages: "Virtualización de escritorios.",
            },
            {
              id: "adv5",
              icon: "fa fa-database",
              descAdvantages: "Administración de operaciones de TI.",
            },
          ],
        },
        {
          id: 8,
          name: "soluciones_de_infraestructura",
          title: "Infraestructura",
          image:
            "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          titleDescription: "",
          description:
            "Con nuestros Servicios de Cableado podrá obtener la integración de los diferentes servicios de los que disponga, como pueden ser telefonía, voz, datos, video, seguridad, etc. Es decir, todo lo referente al cableado estructurado, a los sistemas de cableado estructurado (SCE), al cableado red y cableado Voz y Datos. Lo cual le asegurará una mejor comunicación dentro y fuera de su empresa.",
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Permite la administración sencilla de los cambios de lugar cuando es requerido para personas y equipos.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "La red instalada es fácilmente ampliable cuando así se requiere.",
            },
            {
              id: "adv3",
              icon: "fa fa-database",
              descAdvantages:
                "El sistema de cableado es seguro para el manejo de sus datos.",
            },
            {
              id: "adv4",
              icon: "fa fa-database",
              descAdvantages:
                "Las instalaciones pueden ser certificadas bajo estándares preestablecidos si así se requiere.",
            },
            {
              id: "adv5",
              icon: "fa fa-database",
              descAdvantages:
                "Cada cliente es único y se puede diseñar la solución más adecuada para sus necesidades en cada momento.",
            },
            {
              id: "adv6",
              icon: "fa fa-database",
              descAdvantages:
                "Las redes de Cableado Estructurado son muy confiables y seguras.",
            },
            {
              id: "adv7",
              icon: "fa fa-database",
              descAdvantages:
                "La red permite transmisión de datos a altas velocidades.",
            },
            {
              id: "adv8",
              icon: "fa fa-database",
              descAdvantages:
                "Tienen un largo plazo de amortización y de vida útil.",
            },
          ],
        },
        {
          id: 9,
          name: "soluciones_en_seguridad_electronica",
          title: "Seguridad Electrónica",
          image:
            "https://images.unsplash.com/photo-1515432085503-cabf2fbcd690?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          titleDescription: "",
          description: "",
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Soluciones de monitoreo perimetral, flujo de personas.",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Soluciones completas en soluciones CCTV analógicas y digitales.",
            },
            {
              id: "adv3",
              icon: "fa fa-database",
              descAdvantages:
                "Sistemas con Sensores de Movimiento, Magnéticos, para interiores o exteriores sobre cualquier infraestructura.",
            },
            {
              id: "adv4",
              icon: "fa fa-database",
              descAdvantages:
                "Control de acceso de personal autorizado, mediante reconocimiento facial, biométrico o código pin.",
            },
            {
              id: "adv5",
              icon: "fa fa-database",
              descAdvantages:
                "Solucion de detección temprana y ubicaciones de origen del incendio.",
            },
            {
              id: "adv6",
              icon: "fa fa-database",
              descAdvantages:
                "Solucion de sensores de detección de humo y calor.",
            },
          ],
        },
        {
          id: 10,
          name: "soporte_tecnico",
          title: "Soporte técnico 24x7",
          image:
            "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
          titleDescription: "Mantenimiento preventivo y correctivo",
          description:
            "Una parte importante del ciclo comercial, es el seguimiento y acompañamiento a las soluciones instaladas posteriores a su implementación. Por lo general, todos los productos y soluciones cuentan con respaldo de garantía y soporte, el cual viene incluido en la solucion ofertada.",
          products: [],
          advantages: [
            {
              id: "adv1",
              icon: "fa fa-info-circle",
              descAdvantages:
                "Asistencia técnica sin costo adicional para el cliente. ",
            },
            {
              id: "adv2",
              icon: "fa fa-angle-double-right",
              descAdvantages:
                "Provisión de repuestos y reemplazo de partes durante el periodo de garantía. ",
            },
            {
              id: "adv3",
              icon: "fa fa-database",
              descAdvantages: "Actualización de versiones de software. ",
            },
            {
              id: "adv4",
              icon: "fa fa-database",
              descAdvantages:
                "Mantenimiento preventivo y correctivo con soporte 24X7.",
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