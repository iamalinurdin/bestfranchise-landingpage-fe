<template>
  <div class="home">
    <!-- section: jumbotron -->
    <section class="jumbotron container">
      <div class="description w-50">
        <span class="badge bg-primary p-3 rounded-pill">#1 Franchise Brand</span>
        <h1 class="fw-bold mt-3 lh-base">
          Temukan <span class="text-primary">Bisnis</span>
          <br>
          Terbaik Anda Disini
        </h1>
        <h4 class="text-primary">
          One Stop Franchise Solution
        </h4>
        <p class="text-capitalize text-muted lh-base">
          Bestbrend Adalah perusahaan yang bergerak dalam layanan operasional usaha produk dan jasa berbentuk jejaring waralaba nusantara
        </p>
        <router-link to="#" class="btn btn-primary rounded-4 px-5 py-3">Bergabung</router-link>
        <ul class="list-unstyled d-flex gap-4 mt-5">
          <li>
            <h5 class="fw-bold">5.000+</h5>
            <span class="text-muted">Customer</span>
          </li>
          <li>
            <h5 class="fw-bold">100+</h5>
            <span class="text-muted">Outlet</span>
          </li>
          <li>
            <h5 class="fw-bold">1.000+</h5>
            <span class="text-muted">Ratings</span>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/jumbotron.png" alt="">
    </section>
    <!-- section: jumbotron -->

    <!-- section: about -->
    <section class="about container">
      <div class="d-flex description">
        <h1 class="fw-bold">
          MENGAPA MEMILIH KAMI
          <br> 
          SEBAGAI <span class="text-primary">BISNIS TERBAIK BAGI ANDA</span>
        </h1>
        <p class="text-muted ms-auto">
          Dengan harga investasi yang terjangkau, 
          <br> 
          mitra dapat mendapatkan penghasilan
          <br> 
          yang memuaskan.
        </p>
      </div>
      <div class="row descriptions">
        <div class="col-md-4 description-list">
          <div class="card rounded-4 border-0">
            <div class="card-body">
              <img src="@/assets/svg/Frame 20.svg" alt="">
              <h4 class="fw-bold m-0 mt-3">Lebih Cepat</h4>
              <p class="mb-0 mt-3">Sudah terdapat panduan bisnis yang tinggal diikuti sehingga keuntungan franchise bisa didapat lebih cepat.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 description-list">
          <div class="card rounded-4 border-0">
            <div class="card-body">
              <img src="@/assets/svg/Frame 20.svg" alt="">
              <h4 class="fw-bold m-0 mt-3">Tidak Perlu marketing</h4>
              <p class="mb-0 mt-3">Merk Bisnis Franchise adalah brand yang sudah dikenal oleh banyak orang, sehingga tidak memerlukan marketing yang berat.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 description-list">
          <div class="card rounded-4 border-0">
            <div class="card-body">
              <img src="@/assets/svg/Frame 20.svg" alt="">
              <h4 class="fw-bold m-0 mt-3">Dukungan Pelatihan</h4>
              <p class="mb-0 mt-3">Anda akan mendapatkan pelatihan dan dukungan bisnis dari franchisor, mulai dari aspek terkecil perusahaan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section: about -->

    <!-- section: brand -->
    <section class="brand container">
      <p class="text-muted text-center text-lowercase">BRAND DI BAWAH INI SANGAT MENGUNTUNGKAN DARI SISTEM BISNIS NYA</p>
      <h2 class="text-center">
        BRAND YANG KAMI
        <br>
        <span class="text-primary">REKOMENDASIKAN</span> UNTUK ANDA
      </h2>
      <ul class="nav nav-pills brand-tabs my-3 d-flex justify-content-center gap-3" id="pills-tab" role="tablist">
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
          <div class="row brand-list d-flex justify-content-center">
            <div class="col-md-4 brand-item" v-for="(brand, index) in 5" :key="index">
              <div class="card rounded-4 border-0 mb-5">
                <div class="card-body text-center p-5">
                  <img src="@/assets/logo.png" height="100" alt="">
                  <p class="fw-bold">Food Brand Name {{ index }}</p>
                  <a href="#" class="btn btn-primary rounded-pill">
                    Info Lebih Lanjut
                    <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                  </a>
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
    </section>
    <!-- section: brand -->

    <!-- section: gallery -->
    <section class="gallery container">
      <h4 class="fw-bold">
        Galeri Usaha <span class="text-primary">Waralaba</span>
      </h4>
      <div class="p-5">
        <carousel :navigationEnabled="true" paginationActiveColor="#319EF1" :scrollPerPage="true" :perPage="4">
          <slide v-for="(slide, i) in 5" :key="i">
            <figure>
              <img src="@/assets/logo.png">
              <figcaption>
                The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!
              </figcaption>
            </figure>
          </slide>
        </carousel>
      </div>
    </section>
    <!-- section: gallery -->

    <!-- section: career -->
    <section class="career container">
      <div class="card p-5 text-white border-0 rounded-4">
        <div class="card-body d-flex justify-content-start align-items-center gap-3">
          <img src="@/assets/logo.png" height="50" alt="">
          <div>
            <h3 class="fw-bold">Interested in joining us?</h3>
            <p class="m-0">see all jobs open on our website</p>
          </div>
          <router-link to="#" class="btn btn-light text-primary ms-auto align-self-baseline my-auto rounded-4">
            Lihat Lowongan
            <font-awesome :icon="['fas', 'arrow-right']"></font-awesome>
          </router-link>
        </div>
      </div>
    </section>
    <!-- section: career -->

    <!-- section: faq -->
    <section class="faq">
      <div class="container">
        <div class="d-flex description">
          <h1 class="fw-bold">
            PERTANYAAN YANG SERING
            <br>
            <span class="text-primary">DITANYAKAN</span> 
            TENTANG BESTFRANCHISE
          </h1>
          <p class="text-muted ms-auto">
            Rangkuman pertanyaan yang kami 
            <br> dapatkan apabila ada yang tertarik untuk 
            <br> bergabung bersama bestbrend
          </p>
        </div>
        <div class="row mt-5">
          <div class="col-md-6" v-for="(num, index) in 5" :key="index">
            <div class="accordion mb-3" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Lorem ipsum dolor sit amet
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section: faq -->

    <!-- section: subscribe -->
    <section class="subscribe">
      <div class="container">
        <div class="card border-0 p-5 rounded-4">
          <div class="card-body text-center">
            <p class="text-primary">Lebih Dekat Dengan Kami</p>
            <h1 class="text-muted">
              Dapatkan Keuntungan Promo dan
              <br>
              Hadiah Menarik Dari Kami
            </h1>
            <p class="my-5">
              Silahkan masukan email anda untuk mendapatkan informasi mengenain promo dan program kami
              <br>
              serta berbagai informasi terbaru dan perkembangan Bestbrend.
            </p>
            <form>
              <div class="input-group w-50 mx-auto rounded-pill bg-white p-1">
                <input type="email" class="form-control bg-transparent border-0 rounded-pill rounded-end" placeholder="Enter your email address" aria-label="Enter your email address">
                <button class="btn btn-primary rounded-pill" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- section: subscribe -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.jumbotron {
  position: relative;
  padding-left: 0;
  padding-right: 0;
}

.jumbotron > img {
  position: absolute;
  right: 100px;
  top: 50px;
  height: 520px;
  width: 404px;
}

.jumbotron > .description > h1 {
  font-size: 72px;
}

.jumbotron > .description > h4 {
  font-size: 32px;
}

.about {
  padding: 50px 0px;
}

.about > .description > h1 {
  font-size: 36px;
}

.about > .description > p {
  font-size: 20px;
}

.about > .descriptions {
  margin-top: 60px;
}

.about > .descriptions > .description-list > .card > .card-body > p {
  font-size: 16px;
}

.about > .descriptions > .description-list > .card {
  transition: .3s;
}

.about > .descriptions > .description-list > .card:hover {
  box-shadow: 0px 50px 80px rgba(221, 241, 252, 0.5);
  transform: scale(1.1);
}

.brand > h2 {
  font-size: 36px;
  line-height: 54px;
}

.brand > .brand-tabs > .nav-item > button {
  padding: 16px 24px;
  font-size: 16px;
}

.brand > .tab-content > .tab-pane > .brand-list > .brand-item > .card {
  filter: grayscale(100%);
}

.brand > .tab-content > .tab-pane > .brand-list > .brand-item > .card > .card-body > a {
  opacity: 0;
  transition: .3s;
  padding: 16px 32px;
}

.brand > .tab-content > .tab-pane > .brand-list > .brand-item > .card:hover {
  box-shadow: 0px 50px 80px rgba(221, 241, 252, 0.5);
  filter: grayscale(0%);
}

.brand > .tab-content > .tab-pane > .brand-list > .brand-item > .card:hover > .card-body > a {
  opacity: 1;
}

.gallery > h1 {
  font-size: 36px;
}

.career > .card {
  background-color: #319EF1;
}

.career > .card > .card-body > div > h3 {
  font-size: 40px;
}

.career > .card > .card-body > div > p {
  font-size: 24px;
}

.career > .card > .card-body > a {
  padding: 24px 32px;
}

.faq {
  padding: 50px 100px;
  margin: 100px 0;
  background-color: #F2F9FF;
}

.faq > .container > .description > h1 {
  font-size: 36px;
}

.faq > .container > .description > p {
  font-size: 20px;
}

.subscribe {
  padding: 50px 100px;
  margin: 100px 0;
}

.subscribe > .container > .card {
  background-color: #F2F9FF;
}

/* .subscribe > .container > .card > .card-body > .input-group {
  border: 1px solid;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
} */
</style>
