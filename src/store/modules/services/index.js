// for images
// For Services-Solutions images in the future we will try to move to vuex
import NetworkingImage from "../../../assets/img/Solutions/networking-services.jpg";
import SeguridadRedesImage from "../../../assets/img/Solutions/seguridad-de-redes-services.jpg";
import RedesInalambricasImage from "../../../assets/img/Solutions/redes-inalambricas-services.jpg";
import ColaboracionImage from "../../../assets/img/Solutions/colaboracion-services.jpg";
import ServidoresImage from "../../../assets/img/Solutions/servidores-services.jpg";
import IntegracionSolucionesImage from "../../../assets/img/Solutions/integracion-de-soluciones-services.jpg";
import InfraestructuraImage from "../../../assets/img/Solutions/infraestructura-services.jpg";
import SeguridadElectronicaImage from "../../../assets/img/Solutions/seguridad-electronica-services.jpg";
import SoporteTecnicoImage from "../../../assets/img/Solutions/soporte-tecnico-services.jpg";

export default {
    namespaced: true,
    state() {
        return {
            services: [
                {
                    id: 1,
                    name: "networking",
                    title: "Networking",
                    image:
                        NetworkingImage,
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
                        SeguridadRedesImage,
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
                        RedesInalambricasImage,
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
                        ColaboracionImage,
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
                    name: "soluciones_de_servidores",
                    title: "Servidores y Almacenamiento",
                    image:
                        ServidoresImage,
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
                        {
                            id: "p7",
                            descProduct: "Servidores Torre Básico y Avanzado.",
                        },
                        {
                            id: "p8",
                            descProduct: "Servidores para rack de 1 – 2 y 4 Sockets.",
                        },
                        {
                            id: "p9",
                            descProduct: "Servidores PowerEdge Serie FX. ",
                        },
                        {
                            id: "p10",
                            descProduct: "Servidores PowerEdge Serie M. ",
                        },
                        {
                            id: "p11",
                            descProduct: "Servidores PowerEdge Serie C. ",
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
                            id: "adv2",
                            icon: "fa fa-angle-double-right",
                            descAdvantages:
                                "Ampliar el cómputo y el almacenamiento de manera independiente.",
                        },
                        {
                            id: "adv3",
                            icon: "fa fa-info-circle",
                            descAdvantages: "Informatica de alto rendimiento.",
                        },
                        {
                            id: "adv4",
                            icon: "fa fa-angle-double-right",
                            descAdvantages:
                                "Procesamiento empresarial y soporte para toma de decisiones.",
                        },
                    ],
                },
                {
                    id: 7,
                    name: "integracion_de_soluciones",
                    title: "Integración de Soluciones",
                    image:
                        IntegracionSolucionesImage,
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
                        InfraestructuraImage,
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
                        SeguridadElectronicaImage,
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
                        SoporteTecnicoImage,
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
            ]
        }

    },
    mutations: {
    },
    actions: {
    },
    getters:{
        services(state){
            return state.services;
        },
        hasServices(state){
            return state.services && state.services.length > 0;
        }
    }
}