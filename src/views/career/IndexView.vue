<template>
  <section class="home">
    <div class="container">
      <div class="text-center">
        <p class="text-muted">Ini adalah sebuah perjalanan, dan kami baru saja mulai.</p>
        <h1 class="title">MARI UKIR SEJARAH <span class="text-primary">BERSAMA</span> KAMI</h1>

        <form class="w-75 mx-auto mt-5">
          <div class="input-group">
            <input type="text" class="form-control rounded-pill form-control-lg" placeholder="Masukan kata kunci">
            <button class="btn btn-primary btn-lg ms-2 rounded-pill" type="button">
              <font-awesome :icon="['fas', 'search']"></font-awesome>
              Cari lowongan
            </button>
          </div>
        </form>

        <div class="d-flex justify-content-center gap-3 w-100 flex-wrap h-auto job-list mt-5">
          <router-link v-for="(link, index) in 8" :key="index" class="job-item text-decoration-none fs-3 text-start" to="#">
            Business
            Development
            and
            partnership
            <p class="text-muted fs-6">232 Lowongan</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 50px 100px;
  margin: 100px 0;
}

.job-list > .job-item {
  width: 20%;
  transition: .5s;
}

.job-list > .job-item:hover {
  border-top: 3px solid blue;
}
</style>