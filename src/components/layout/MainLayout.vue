<template>
  <div class="wrapper">
    <header>
      <nav class="navbar navbar-expand-lg bg-transparent py-3">
        <div class="container">
          <router-link class="navbar-brand" :to="{name: 'home'}">
            <img src="@/assets/logo/logo-horizontal-white.png" width="220" alt="">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{name: 'home'}">Beranda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'about'}">Tentang Kami</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produk
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="dropdown-item" :to="{name: 'product.franchise'}">Franchise</router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Kemitraan</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">Galeri</a>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'career.index'}" class="nav-link">Karir</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link">Hubungi Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <ul class="list-unstyled d-flex gap-3 justify-content-end mt-3 flex-column flex-lg-row">
          <li>
            <a href="tel:+628989088881" class="text-decoration-none text-dark">
              <font-awesome :icon="['fas', 'phone']" class="text-primary"></font-awesome>
              <span class="ms-2">+628989088881</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/628122488881" class="text-decoration-none text-dark" target="_blank">
              <font-awesome :icon="['fab', 'whatsapp']" class="text-primary"></font-awesome>
              <span class="ms-2">+628122488881</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <slot></slot>
    <footer>
      <div class="container d-flex gap-5 flex-column flex-lg-row">
        <div class="d-flex flex-column gap-3 justify-content-start about-company">
          <img src="@/assets/logo/logo-horizontal-white.png" width="180" alt="">
          <p class="text-muted">
            PT Best Franchise Indonesia adalah perusahaan yang menaungi Franchise Franchise di Indonesia dengan kisaran harga franchise dibawah 250 juta.
          </p>
          <p class="mt-auto text-muted d-none d-lg-block">
            Copyright Bestfranchise
          </p>
        </div>
        <div class="">
          <h6 class="fw-bold">Fitur</h6>
          <ul class="list-unstyled d-flex flex-column gap-3 mt-3">
            <li>
              <router-link :to="{name: 'home'}" class="text-decoration-none text-muted">Beranda</router-link>
            </li>
            <li>
              <router-link :to="{name: 'about'}" class="text-decoration-none text-muted">Tentang Kami</router-link>
            </li>
            <li>
              <router-link to="#" class="text-decoration-none text-muted">Galeri</router-link>
            </li>
            <li>
              <router-link :to="{name: 'career.index'}" class="text-decoration-none text-muted">Karir</router-link>
            </li>
            <li>
              <router-link to="#" class="text-decoration-none text-muted">Hubungi Kami</router-link>
            </li>
          </ul>
        </div>
        <div class="">
          <h6 class="fw-bold">Get in Touch</h6>
          <ul class="list-unstyled d-flex flex-column gap-3 mt-3">
            <li>
              <a href="tel:+628989088881" class="text-decoration-none text-dark">
                <font-awesome :icon="['fas', 'phone']"></font-awesome>
                <span class="ms-2 text-muted">+628989088881</span>
              </a>
            </li>
            <li>
              <font-awesome :icon="['far', 'envelope']" class="me-2"></font-awesome>
              <span class="text-muted">info@bestbrand.id</span>
            </li>
            <li>
              <font-awesome :icon="['fas', 'map-pin']" class="me-2"></font-awesome>
              <span class="text-muted">
                GATEWAY Tower, EB.LG1.03A,
                Jl Jendral Ahmad Yani No.669
                Bandung 40125
              </span>
            </li>
          </ul>
        </div>
        <div class="">
          <h6 class="fw-bold">Our Social Media</h6>
          <ul class="list-unstyled d-flex gap-3 my-3">
            <li>
              <a href="https://instagram.com" target="_blank">
                <font-awesome :icon="['fab', 'instagram']" size="xl" class="me-2"></font-awesome>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank">
                <font-awesome :icon="['fab', 'facebook']" size="xl" class="me-2"></font-awesome>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <font-awesome :icon="['fab', 'twitter']" size="xl" class="me-2"></font-awesome>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                <font-awesome :icon="['fab', 'linkedin']" size="xl" class="me-2"></font-awesome>
              </a>
            </li>
            <li>
              <router-link to="#">
                <font-awesome :icon="['fab', 'whatsapp']" size="xl" class="me-2"></font-awesome>
              </router-link>
            </li>
          </ul>
          <p class="text-muted">Follow our social media</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.wrapper {
  background-image: linear-gradient(to top, #ffffff, #fafbff, #f2f7ff, #e8f4fe, #ddf1fc);
}

footer {
  padding: 50px 100px;
}

footer > .container > div {
  width: 25%;
}

@media only screen and (max-width: 576px) {
  footer {
    padding: 25px;
  }

  /* footer > .container {
    flex-direction: column;
  } */

  footer > .container > div {
    width: 100%;
  }

  /* footer > .container > .about-company > p:last-child {
    display: none;
  } */
}
</style>