<template>
  <main>
    <div class="title-section">
      <div class="container d-flex align-items-center">
        <div class="row">
          <div class="col">
            <h1>CONTACTO</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row contact-section">
        <div class="col">
          <section class="map-clean">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.6651985250705!2d-68.12929323823974!3d-16.511898391726504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f215ba86ed39f%3A0x37262f748820cd58!2sGroupcisc%2C%20Centro%20Empresarial%20SRL!5e0!3m2!1ses!2sbo!4v1614695970086!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 contact-section">
        <div class="col">
          <h4>Envíanos tu Mensaje</h4>
          <a class="d-flex justify-content-center" href="https://wa.me/message/3ZAB4W3XMR5RP1" target="_blank">
            <img id="contact-logo" src="../assets/img/UI/groupcisc-contact.png" class="img-fluid" alt="">
          </a>
        </div>
        <div class="col">
          <div>
            <h5>DIRECCIÓN</h5>
            <p>
              Calle A. Ascarrunz Nro 2506, esquina Calle Lisimaco Gutierrez Zona
              Sopocachi<br />La Paz -Bolivia
            </p>
            <h5>TELÉFONOS</h5>
            <p>TELF.: (591) 2410150<br />CEL.: (591) 69927061</p>
            <h5>HORARIOS DE ATENCIÓN</h5>
            <p>
              MAÑANA: 08:00 A.M. - 12:30 P.M.<br />TARDE: 14:30 P.M. - 18:30
              P.M.
            </p>
          </div>
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

.btn.btn-primary {
  width: 100%;
}

.row.contact-section {
  margin: 10px 0px;
}

#contact-logo{
  transition: 0.1s ease-in;
}

#contact-logo:hover {
  box-shadow: 3px 3px 17px 2px rgba(37,38,38,0.2);
}
</style>

