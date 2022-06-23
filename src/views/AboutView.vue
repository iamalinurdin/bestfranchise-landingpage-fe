<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title">
            <span class="text-primary">Suksesmu</span>
            <br>
            Berawal Dari Sini
          </h1>
          <p class="text-muted subtitle">
            Apakah Anda seorang pebisnis yang sedang mencari
            <br>
            usaha dibidang waralaba makanan kuliner maupun
            <br> minuman?
          </p>
          <div class="description">
            Tidak bisa dipungkiri, bisnis waralaba saat ini sedang menjamur di
            <br>
            wilayah Nusantara Indonesia. Baik waralaba makanan maupun 
            <br>
            minuman. Keduanya memiliki peluang usaha yang sangat
            <br>
            menjanjikan dan menguntungkan.
            <br>
            <br>
            Kendati di saat pandemi, bisnis ini tetap mewabah dan banyak 
            <br>
            dicari oleh para investor dan pengusaha. Simak terus penjelasannya
            <br>
            dibawah ini.
          </div>
        </div>
        <div class="col-md-6">
          <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 100%; height: 350px"></GmapMap>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 50px 100px;
  margin: 100px 0;
}

h1.title {
  font-size: 32px;
  font-weight: bold;
}

p.subtitle {
  font-size: 16px;
}
</style>