<template>
  <nav class="navbar navbar-light navbar-expand-md navbar-style">
    <div class="container">
      <router-link to="/">
        <img
          class="img-fluid"
          src="../../assets/img/UI/LOGO-FINAL-GC.png"
          style="width: 107px"
      /></router-link>
      <button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navcol-1"
      >
        <span class="sr-only">Toggle navigation</span
        ><i class="fa fa-align-justify"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end navbar-collapse collapse-menu"
        id="navcol-1"
      >
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="dropdown-toggle nav-link"
              aria-expanded="false"
              data-toggle="dropdown"
              href="#"
              >SOLUCIONES IT</a
            >
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/services/networking"
                >Networking</router-link
              >
              <router-link class="dropdown-item" to="/services/seguridad_de_redes"
                >Seguridad de Redes</router-link
              >
              <a class="dropdown-item" href="#">Redes Inalámbricas</a
              ><a class="dropdown-item" href="#">Colaboración</a
              ><a class="dropdown-item" href="#">Servidores y Almacenamiento</a
              ><a class="dropdown-item" href="#">Integración</a
              ><a class="dropdown-item" href="#">Energía y Cableado</a
              ><a class="dropdown-item" href="#">Seguridad Electronica</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">NOSOTROS</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#products">PRODUCTOS</a>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">CONTACTO</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.collapse-menu {
  z-index: 1;
}
</style>