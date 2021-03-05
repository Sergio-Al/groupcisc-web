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
          <h3>SOLUCIONES IT</h3>
          <ul>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-column">
          <h3>CONTACTOS</h3>
          <ul>
            <li><a href="mailTo.servicios@groupcisc.com">Servicio de Preventa</a></li>
            <li><a href="mailTo.servicios@groupcisc.com">Servicio de Postventa</a></li>
            <li><router-link to="/services/soporte_tecnico">Soporte Técnico</router-link></li>
            <li><a href="mailTo:atencion.cliente@groupcisc.com">Atención al cliente</a></li>
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
          <a href="#"><i class="icon ion-social-facebook"></i></a
          ><a href="#"><i class="icon ion-social-linkedin"></i></a
          ><a href="#"><i class="icon ion-social-instagram"></i></a>
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