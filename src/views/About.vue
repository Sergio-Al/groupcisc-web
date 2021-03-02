<template>
  <main>
    <div class="title-section">
      <div class="container d-flex align-items-center">
        <div class="row">
          <div class="col">
            <h1>ACERCA DE</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row about-section">
        <div class="col d-flex align-items-center">
          <div>
            <h2>NOSOTROS</h2>
            <p>
              Somos una organización dedicada a la comercialización de
              soluciones en el campo de la Tecnología de la Información y
              Telecomunicaciones, abarcando aspectos de diseño, instalación y
              mantenimiento de equipos de comunicación IP, soluciones integradas
              para la transmisión de voz, datos, sistemas de almacenamiento de
              datos, cableado estructurado y otros.
            </p>
          </div>
        </div>
        <div class="col img-column">
          <img
            class="img-fluid"
            src="../assets/img/About/web-about-historia.png"
          />
        </div>
      </div>
      <div class="row about-section">
        <div class="col img-column">
          <img
            class="img-fluid"
            src="../assets/img/About/web-about-mission.png"
          />
        </div>
        <div class="col d-flex align-items-center">
          <div>
            <h2>MISIÓN</h2>
            <p>
              Continuar siendo en todo momento el apoyo tecnológico hacia todos
              nuestros clientes, ofreciendo siempre responsabilidad empresarial
              y compromiso de calidad a cada una de sus necesidades
              tecnológicas.
            </p>
          </div>
        </div>
      </div>
      <div class="row about-section">
        <div class="col d-flex align-items-center">
          <div>
            <h2>VISIÓN</h2>
            <p>
              Profesionales comprometidos y dedicados a proveer soluciones e
              innovación tecnológica hacia nuestros clientes logrando
              tecnologizar y satisfacer sus necesidades en las tecnologías de
              información.
            </p>
          </div>
        </div>
        <div class="col img-column">
          <img
            class="img-fluid"
            src="../assets/img/About/web-about-vision.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
div.title-section {
  background-color: #004097;
  color: #fff;
  height: 120px;
  display: flex;
}

h1 {
  font-weight: bold;
}

.row.about-section {
  margin: 20px 0;
}

.col.img-column {
  display: flex;
  align-items: center;
}

@media (max-width: 510px) {
  .col.img-column {
    display: none;
  }
}
</style>
