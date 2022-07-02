<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card w-75 mx-auto rounded-4 border-0 product-regular">
        <div class="card-body text-center py-3 px-0">
          <p class="text-muted">
            {{ product.name }}
          </p>
          <h4>Mini Resto</h4>
          <hr class="border">
          <div class="price">
            <span class="fs-6">Rp</span>
            <span class="fs-1">{{ product.prices.silver }}</span>
          </div>
          <p class="text-muted mt-3 mb-5">
            Tipe : 100 Meter
          </p>
          <router-link to="#" class="btn btn-light rounded-pill btn-lg text-decoration-none">Info lebih lanjut</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card w-75 mx-auto rounded-4 border-0 product-large">
        <div class="card-body text-center py-3 px-0">
          <img src="@/assets/logo.png" height="30" alt="">
          <h4 class="mt-3">Mini Resto</h4>
          <hr class="border">
          <div class="price">
            <span class="fs-6">Rp</span>
            <span class="fs-1">{{ product.prices.gold }}</span>
          </div>
          <p class="text-muted my-3">
            Tipe : 150 Meter
          </p>
          <div class="d-flex justify-content-center gap-4 my-4">
            <router-link to="#">
              <font-awesome :icon="['fab', 'facebook']" size="xl"></font-awesome>
            </router-link>
            <router-link to="#">
              <font-awesome :icon="['fab', 'instagram']" size="xl"></font-awesome>
            </router-link>
            <router-link to="#">
              <font-awesome :icon="['fas', 'share-alt']" size="xl"></font-awesome>
            </router-link>
          </div>
          <a href="https://wa.me/628122488881" class="btn btn-primary btn-lg text-decoration-none rounded-pill">
            Chat Whatsapp
            <font-awesome :icon="['fas', 'comment']" class="ms-3"></font-awesome>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card w-75 mx-auto rounded-4 border-0 product-regular">
        <div class="card-body text-center py-3 px-0">
          <p class="text-muted">
            {{ product.name }}
          </p>
          <h4>Resto Cafe</h4>
          <hr class="border">
          <div class="price">
            <span class="fs-6">Rp</span>
            <span class="fs-1">{{ product.prices.platinum }}</span>
          </div>
          <p class="text-muted mt-3 mb-5">
            Tipe : 200 Meter
          </p>
          <router-link to="#" class="btn btn-light rounded-pill btn-lg text-decoration-none">Info lebih lanjut</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prices: {
      required: true
    }
  }
}
</script>