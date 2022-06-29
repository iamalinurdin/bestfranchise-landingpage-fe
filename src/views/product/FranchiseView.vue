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
          <button class="btn btn-outline-primary rounded-pill active p-3" id="pills-food-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="true">
            Makanan
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-primary rounded-pill p-3" id="pills-beverage-tab" data-bs-toggle="pill" data-bs-target="#pills-beverage" type="button" role="tab" aria-controls="pills-beverage" aria-selected="false">
            Minuman
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-primary rounded-pill p-3" id="pills-utility-tab" data-bs-toggle="pill" data-bs-target="#pills-utility" type="button" role="tab" aria-controls="pills-utility" aria-selected="false">
            Utilitas
          </button>
        </li>
      </ul>
      <div class="tab-content container" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab" tabindex="0">
          <div class="container">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center gap-4" id="pills-tab" role="tablist">
              <li v-for="(product, index) in foods" :key="index" class="nav-item w-auto" role="presentation">
                <a @click="selectedFood = product.id" class="text-decoration-none text-muted" :class="{active: index == 0}" :id="`pills-product-${product}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-product-${product.id}`" type="button" role="tab" :aria-controls="`pills-product-${product.id}`" aria-selected="true">
                  {{ product.name }}
                </a>
              </li>
            </ul>
            <div class="tab-content py-5" id="pills-tabContent">
              <div class="tab-pane fade" :class="{'active show': product.id == selectedFood}" v-for="(product, index) in foods" :key="index"  :id="`pills-product-${product.id}`" role="tabpanel" :aria-labelledby="`pills-product-${product.id}-tab`" tabindex="0">
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
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-beverage" role="tabpanel" aria-labelledby="pills-beverage-tab" tabindex="0">
          <div class="container">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center gap-4" id="pills-tab" role="tablist">
              <li v-for="(product, index) in beverages" :key="index" class="nav-item w-auto" role="presentation">
                <a @click="selectedBeverage = product.id" class="text-decoration-none text-muted" :class="{active: index == 0}" :id="`pills-product-${product}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-product-${product.id}`" type="button" role="tab" :aria-controls="`pills-product-${product.id}`" aria-selected="true">
                  {{ product.name }}
                </a>
              </li>
            </ul>
            <div class="tab-content py-5" id="pills-tabContent">
              <div class="tab-pane fade" :class="{'active show': product.id == selectedBeverage}" v-for="(product, index) in beverages" :key="index"  :id="`pills-product-${product.id}`" role="tabpanel" :aria-labelledby="`pills-product-${product.id}-tab`" tabindex="0">
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
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-utility" role="tabpanel" aria-labelledby="pills-utility-tab" tabindex="0">
          <div class="container">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center gap-4" id="pills-tab" role="tablist">
              <li v-for="(product, index) in utilities" :key="index" class="nav-item w-auto" role="presentation">
                <a @click="selectedUtility = product.id" class="text-decoration-none text-muted" :class="{active: index == 0}" :id="`pills-product-${product}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-product-${product.id}`" type="button" role="tab" :aria-controls="`pills-product-${product.id}`" aria-selected="true">
                  {{ product.name }}
                </a>
              </li>
            </ul>
            <div class="tab-content py-5" id="pills-tabContent">
              <div class="tab-pane fade" :class="{'active show': product.id == selectedUtility}" v-for="(product, index) in utilities" :key="index"  :id="`pills-product-${product.id}`" role="tabpanel" :aria-labelledby="`pills-product-${product.id}-tab`" tabindex="0">
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
import foods from '@/data/foods.json'
import beverages from '@/data/beverages.json'
import utilities from "@/data/utilities.json";

export default {
  data () {
    return {
      products: 18,
      selectedFood: 0,
      selectedBeverage: 0,
      selectedUtility: 0,
      foods,
      beverages,
      utilities
    }
  },
  mounted () {
    this.selectedFood = this.foods[0].id
    this.selectedBeverage = this.beverages[0].id
    this.selectedUtility = this.utilities[0].id
  },
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