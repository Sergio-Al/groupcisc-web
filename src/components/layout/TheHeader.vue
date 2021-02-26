<template>
  <nav class="navbar navbar-light navbar-expand-md navbar-style">
    <div class="container">
      <a class="navbar-brand brand-style" href="#"
        ><img
          class="img-fluid"
          src="../../assets/img/UI/LOGO-FINAL-GC.png"
          style="width: 107px" /></a
      ><button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navcol-1"
      >
        <span class="sr-only">Toggle navigation</span
        ><i class="fa fa-align-justify"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end navbar-collapse"
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
              <router-link class="dropdown-item" to="/services">Servicios</router-link>
              <a class="dropdown-item" href="#">Seguridad de Redes</a
              ><a class="dropdown-item" href="#">Redes Inalámbricas</a
              ><a class="dropdown-item" href="#">Soluciones de Colaboración</a
              ><a class="dropdown-item" href="#">Servidores y Almacenamiento</a
              ><a class="dropdown-item" href="#">Integración de Soluciones</a
              ><a class="dropdown-item" href="#"
                >Soluciones de Energía y Cableado</a
              ><a class="dropdown-item" href="#"
                >Soluciones en Seguridad Electronica</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">NOSOTROS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#products">PRODUCTOS</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">CONTACTO</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>