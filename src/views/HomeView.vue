<template>
  <div class="home">
    <!-- section: jumbotron -->
    <section class="jumbotron">
      <div class="container">
        <div class="description">
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
            Bestfranchise Adalah perusahaan yang bergerak dalam layanan
            <br> operasional usaha produk dan jasa berbentuk jejaring waralaba
            <br> nusantara
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
        <img src="@/assets/img/jumbotron.png" class="d-none d-lg-block" alt="">
      </div>
    </section>
    <!-- section: jumbotron -->

    <!-- section: about -->
    <section class="about">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row description">
          <h1 class="fw-bold">
            MENGAPA MEMILIH <img src="@/assets/logo/logo-horizontal-white.png" width="200" alt="">
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
      </div>
    </section>
    <!-- section: about -->

    <!-- section: brand -->
    <section class="brand">
      <div class="container">
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
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/chicheese logo.jpg" height="200" alt="">
                    <p class="fw-bold">ChiCheese Fiesta</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/rfc logo.jpg" height="200" alt="">
                    <p class="fw-bold">Rocket Fried Chicken</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/warunk gaulau logo.jpg" height="200" alt="">
                    <p class="fw-bold">Warunk Gaulau</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/boyben logo.jpg" height="200" alt="">
                    <p class="fw-bold">BoyBen</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/wingers logo.jpg" height="200" alt="">
                    <p class="fw-bold">Wingers</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/bakso planet logo.jpg" height="200" alt="">
                    <p class="fw-bold">Bakso Planet</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Tokiyo Bento</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Pesta Pizza</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/sejuta raso logo.jpg" height="200" alt="">
                    <p class="fw-bold">Sejuta Raso</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/kchick logo.jpg" height="200" alt="">
                    <p class="fw-bold">Kchick</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Nihon Go</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Nonie's</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Martel Martabak Teladan</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Eskimos</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/nellq dimsum logo.jpg" height="200" alt="">
                    <p class="fw-bold">Nell'Q</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">BreadPit</p>
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
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/bumbum.png" height="200" alt="">
                    <p class="fw-bold mt-3">BumBum Thai Tea</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/rocket-coffee.png" height="200" alt="">
                    <p class="fw-bold mt-3">Rocket Coffee</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/racikito logo.jpg" height="200" alt="">
                    <p class="fw-bold mt-3">Racikito</p>
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
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/greenwash logo.jpg" height="200" alt="">
                    <p class="fw-bold">Green Wash</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Purple Army Laundry</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Apotiku</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">AIA Pack</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/logo brand/barbershop logo.jpg" height="200" alt="">
                    <p class="fw-bold">Barbershop Best</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Rocket MotoCP</p>
                    <a href="#" class="btn btn-primary rounded-pill">
                      Info Lebih Lanjut
                      <font-awesome :icon="['fas', 'arrow-right']" class="ms-2"></font-awesome>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 brand-item">
                <div class="card rounded-4 border-0 mb-5">
                  <div class="card-body text-center p-5">
                    <img src="@/assets/img/photo-unavailable.jpeg" height="200" alt="">
                    <p class="fw-bold">Eco Car</p>
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

    <!-- section: gallery -->
    <section class="gallery">
      <div class="container">
        <img src="@/assets/logo/logo-horizontal-white.png" width="180" alt="">
        <h4 class="fw-bold">
          Galeri Usaha <span class="text-primary">Waralaba</span>
        </h4>
        <div class="p-5">
          <carousel :navigationEnabled="true" paginationActiveColor="#319EF1" :scrollPerPage="true" :perPage="4">
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/aiapack.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/apotiku.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/bakso-planet.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/barbershop.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/boyben.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/breadpit.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/bumbum.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/chi-cheese.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/ecocar.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/eskimos.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/green-wash.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/kchick.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/martel.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/motocp.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/nellq.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/nihongo.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/nonies.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/pesta-pizza.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/purple-army.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/racikito.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/rfc.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/rocket-coffee.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/sejuta-raso.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/tokiyo-bento.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/warunk-gaulau.jpeg" class="img-thumbnail">
              </figure>
            </slide>
            <slide>
              <figure class="mx-2">
                <img src="@/assets/brosur/wingers.jpeg" class="img-thumbnail">
              </figure>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <!-- section: gallery -->

    <!-- section: career -->
    <section class="career">
      <div class="container">
        <div class="card text-white border-0 rounded-4">
          <div class="card-body"> <!--  d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3 -->
            <img src="@/assets/logo/Artboard 1 copy.png" height="100" alt="">
            <div>
              <h3 class="fw-bold">Interested in joining us?</h3>
              <p class="m-0">see all jobs open on our website</p>
            </div>
            <router-link :to="{name: 'career.index'}" class="btn btn-light text-primary ms-auto align-self-baseline my-auto rounded-4">
              Lihat Lowongan
              <font-awesome :icon="['fas', 'arrow-right']"></font-awesome>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- section: career -->

    <!-- section: faq -->
    <section class="faq">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row description">
          <h1 class="fw-bold">
            PERTANYAAN YANG SERING
            <br>
            <span class="text-primary">DITANYAKAN</span> 
            TENTANG  <img src="@/assets/logo/logo-horizontal-white.png" width="200" alt="">
          </h1>
          <p class="text-muted ms-auto">
            Rangkuman pertanyaan yang kami 
            <br> dapatkan apabila ada yang tertarik untuk 
            <br> bergabung bersama Bestfranchise
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
        <div class="card border-0 rounded-4">
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
              serta berbagai informasi terbaru dan perkembangan Bestfranchise.
            </p>
            <form class="mx-auto">
              <div class="input-group rounded-pill bg-white p-1">
                <input type="email" class="form-control bg-transparent border-0 rounded-pill me-2" placeholder="Enter your email address" aria-label="Enter your email address">
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
import foods from '@/data/foods.json'
import beverages from '@/data/beverages.json'
import utilities from '@/data/utilities.json'

export default {
  name: 'HomeView',
  data () {
    return {
      foods,
      beverages,
      utilities
    }
  },
}
</script>

<style scoped>
.jumbotron {
  padding: 25px 100px;
  margin-bottom: 100px;
}

.jumbotron > .container {
  position: relative;
  padding-left: 0;
  padding-right: 0;
}

.jumbotron > .container > img {
  position: absolute;
  right: 100px;
  top: 50px;
  height: 520px;
  width: 404px;
}

.jumbotron > .container > .description {
  width: 50%;
}

.jumbotron > .container > .description > h1 {
  font-size: 72px;
}

.jumbotron > .container > .description > h4 {
  font-size: 32px;
}

.about {
  padding: 25px 100px;
  margin-bottom: 100px;
}

/* .about > .container {
  padding: 50px 0px;
} */

.about > .container > .description > h1 {
  font-size: 36px;
}

.about > .container > .description > p {
  font-size: 20px;
}

.about > .container > .descriptions {
  margin-top: 60px;
}

.about > .container > .descriptions > .description-list > .card > .card-body > p {
  font-size: 16px;
}

.about > .container > .descriptions > .description-list > .card {
  transition: .3s;
}

.about > .container > .descriptions > .description-list > .card:hover {
  box-shadow: 0px 50px 80px rgba(221, 241, 252, 0.5);
  transform: scale(1.1);
}

.brand {
  padding: 25px 100px;
  margin-bottom: 100px;
}

.brand > .container > h2 {
  font-size: 36px;
  line-height: 54px;
}

.brand > .container > .brand-tabs > .nav-item > button {
  padding: 16px 24px;
  font-size: 16px;
}

.brand > .container > .tab-content > .tab-pane > .brand-list > .brand-item > .card {
  filter: grayscale(100%);
}

.brand > .container > .tab-content > .tab-pane > .brand-list > .brand-item > .card > .card-body > a {
  opacity: 0;
  transition: .3s;
  padding: 16px 32px;
}

.brand > .container > .tab-content > .tab-pane > .brand-list > .brand-item > .card:hover {
  box-shadow: 0px 50px 80px rgba(221, 241, 252, 0.5);
  filter: grayscale(0%);
}

.brand > .container > .tab-content > .tab-pane > .brand-list > .brand-item > .card:hover > .card-body > a {
  opacity: 1;
}

.gallery {
  padding: 25px 100px;
  margin-bottom: 100px;
}

.gallery > .container > h1 {
  font-size: 36px;
}

.career {
  padding: 25px 100px;
  margin-bottom: 100px;
}

.career > .container > .card {
  background-color: #319EF1;
  padding: 30px;
}

.career > .container > .card > .card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.career > .container > .card > .card-body > div > h3 {
  font-size: 40px;
}

.career > .container > .card > .card-body > div > p {
  font-size: 24px;
}

.career > .container > .card > .card-body > a {
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
  padding: 30px;
}

.subscribe > .container > .card > .card-body > form {
  width: 50%;
}

@media only screen and (min-width: 576px) {
  /* .jumbotron {
    padding: 25px;
  } */
  .jumbotron > .container > img {
    display: none;
  }

  .jumbotron > .container > .description {
    width: 100%;
  }

  .jumbotron > .container > .description > h1 {
    font-size: 3em;
  }
}

@media only screen and (max-width: 768px) {
  .jumbotron, 
  .about,
  .brand,
  .career,
  .faq,
  .subscribe {
    padding: 25px;
  }

  .jumbotron > .container > img {
    display: none;
  }

  .gallery { 
    display: none;
  }

  .jumbotron > .container > .description,
  .faq > .container > .description,
  .subscribe > .container
  {
    width: 100%;
  }

  .jumbotron > .container > .description > h1,
  .about > .container > .description > h1,
  .faq > .container > .description > h1 {
    font-size: var(--font-size-responsive-md);
  }

  .about > .container > .descriptions > .description-list > .card {
    margin-bottom: 20px;
  }

  .career > .container > .card {
    text-align: center;
    padding: 15px;
  }

  .career > .container > .card > .card-body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .subscribe > .container > .card > .card-body > form {
    width: 100%;
  }
}
</style>
