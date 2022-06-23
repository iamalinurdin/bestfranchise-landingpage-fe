<template>
  <!-- section: brand -->
  <section class="brand">
    <div class="container">
      <p class="text-muted text-center text-lowercase">BRAND DI BAWAH INI SANGAT MENGUNTUNGKAN DARI SISTEM BISNIS NYA</p>
      <h2 class="text-center">
        BRAND YANG KAMI
        <br>
        <span class="text-primary">REKOMENDASIKAN</span> UNTUK ANDA
      </h2>
      <ul class="nav nav-pills brand-tabs my-5 d-flex justify-content-center gap-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-primary rounded-pill active" id="pills-food-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="true">
            Makanan
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-primary rounded-pill" id="pills-beverage-tab" data-bs-toggle="pill" data-bs-target="#pills-beverage" type="button" role="tab" aria-controls="pills-beverage" aria-selected="false">
            Minuman
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-primary rounded-pill" id="pills-utility-tab" data-bs-toggle="pill" data-bs-target="#pills-utility" type="button" role="tab" aria-controls="pills-utility" aria-selected="false">
            Utilitas
          </button>
        </li>
      </ul>
      <div class="tab-content container" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab" tabindex="0">
          <div class="container">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center gap-4" id="pills-tab" role="tablist">
              <li v-for="(product, index) in products" :key="index" class="nav-item w-auto" role="presentation">
                <a class="text-decoration-none" :class="{active: product == 1}" :id="`pills-product-${product}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-product-${product}`" type="button" role="tab" :aria-controls="`pills-product-${product}`" aria-selected="true">
                  Produk {{ product }}
                </a>
              </li>
            </ul>
            <div class="tab-content py-5" id="pills-tabContent">
              <div v-for="(product, index) in products" :key="index" class="tab-pane fade" :class="{'active show': product == 1}" :id="`pills-product-${product}`" role="tabpanel" :aria-labelledby="`pills-product-${product}-tab`" tabindex="0">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card w-75 mx-auto rounded-4 border-0 product-regular">
                      <div class="card-body text-center py-3 px-0">
                        <p class="text-muted">
                          Brand {{ product }}
                        </p>
                        <h4>Mini Resto</h4>
                        <hr class="border">
                        <div class="price">
                          <span class="fs-6">Rp</span>
                          <span class="fs-1">200jt</span>
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
                          <span class="fs-1">250jt</span>
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
                        <router-link to="#" class="btn btn-primary btn-lg text-decoration-none rounded-pill">
                          Chat Whatsapp
                          <font-awesome :icon="['fas', 'comment']" class="ms-3"></font-awesome>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card w-75 mx-auto rounded-4 border-0 product-regular">
                      <div class="card-body text-center py-3 px-0">
                        <p class="text-muted">
                          Brand {{ product }}
                        </p>
                        <h4>Resto Cafe</h4>
                        <hr class="border">
                        <div class="price">
                          <span class="fs-6">Rp</span>
                          <span class="fs-1">300jt</span>
                        </div>
                        <p class="text-muted mt-3 mb-5">
                          Tipe : 200 Meter
                        </p>
                        <router-link to="#" class="btn btn-light rounded-pill btn-lg text-decoration-none">Info lebih lanjut</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-beverage" role="tabpanel" aria-labelledby="pills-beverage-tab" tabindex="0">
          <div class="row brand-list d-flex justify-content-center">
            <div class="col-md-4 brand-item" v-for="(brand, index) in 5" :key="index">
              <div class="card rounded-4 border-0 mb-5">
                <div class="card-body text-center p-5">
                  <img src="@/assets/logo.png" height="100" alt="">
                  <p class="fw-bold">Beverage Brand Name {{ index }}</p>
                  <a href="#" class="btn btn-primary rounded-pill">
                    Info Lebih Lanjut
                    <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-utility" role="tabpanel" aria-labelledby="pills-utility-tab" tabindex="0">
          <div class="row brand-list d-flex justify-content-center">
            <div class="col-md-4 brand-item" v-for="(brand, index) in 5" :key="index">
              <div class="card rounded-4 border-0 mb-5">
                <div class="card-body text-center p-5">
                  <img src="@/assets/logo.png" height="100" alt="">
                  <p class="fw-bold">Utility Brand Name {{ index }}</p>
                  <a href="#" class="btn btn-primary rounded-pill">
                    Info Lebih Lanjut
                    <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section: brand -->
</template>

<script>
export default {
  data () {
    return {
      products: 18
    }
  }
}
</script>

<style scoped>
.brand {
  padding: 25px 100px;
  /* margin: 100px 0; */
  margin-bottom: 100px;
}

.product-regular {
  transform: scale(0.9);
}
.product-large {
  transform: scale(1.1);
}
</style>