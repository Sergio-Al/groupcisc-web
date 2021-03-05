<template>
  <footer class="footer-dark">
    <div class="container text-left">
      <div class="row">
        <div class="col-md-3 footer-column">
          <h3>UBICACIÓN</h3>
          <ul>
            <li>Dirreccion: Calle A. Ascarrunz <br/> Nro. 2506, esquina Calle Lisimaco Gutierrez Zona Sopocachi</li>
            <li>La Paz-Bolivia</li>
            <li>Telefono: (+591) 2410150</li>
            <li>Whatsapp: (+591) 69927061</li>
          </ul>
        </div>
        <div class="col-md-3 footer-column">
          <h3>ACCESIBILIDAD</h3>
          <ul>
            <li><router-link to="/services/networking">Soluciones IT</router-link></li>
            <li><router-link to="/about">Nosotros</router-link></li>
            <li><router-link to="/services/networking">Productos</router-link></li>
            <li><router-link to="/contact">Contacto</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 footer-column">
          <h3>CONTACTOS</h3>
          <ul>
            <li><router-link to="/servicios/contactos_comerciales">Servicio de Preventa</router-link></li>
            <li><router-link to="/services/contactos_comerciales">Servicio de Postventa</router-link></li>
            <li><router-link to="/services/soporte_tecnico">Soporte Técnico</router-link></li>
            <li><router-link to="/services/contactos_comerciales">Atención al cliente</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 footer-column">
          <h3>CENTRO DE CAPACITACIÓN</h3>
          <ul>
            <li><a href="#">Cursos de Capacitación</a></li>
            <li><a href="#">Bootcamps</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div class="col-md-12 item social">
          <a href="https://www.facebook.com/GroupCisc"><i class="icon ion-social-facebook"></i></a
          ><a href="https://www.linkedin.com/in/groupcisc-s-r-l-centro-empresarial-3518011aa/"><i class="icon ion-social-linkedin"></i></a
          ><a href="https://www.instagram.com/groupcisc.srl/"><i class="icon ion-social-instagram"></i></a>
        </div>
      </div>
      <p class="copyright">
        Copyrights ©️ 2021 - Groupcisc Centro Empresarial S.R.L.
      </p>
    </div>
  </footer>
</template>

<style scoped>
@import url(../../assets/css/Footer-Dark.css);
</style>