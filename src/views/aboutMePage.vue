<template>
  <nav-bar />
  <div class="container max-width">
    <div class="card p-5 mx-3">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="../assets/images/me2.webp" alt="Muhamad Rizki Ismail" class="card__img object-fit-cover" />
        </div>
        <div class="col-md-8">
          <h1 class="fs-3">Muhamad Rizki Ismail</h1>
          <p class="card__text my-1">
            Muhamad Rizki Ismail atau dikenal dengan nama pena Yuri S. Ostrovsky adalah seorang <i>self-taught web developer,</i> seniman visual, dan penulis cerpen. Ia lulus dari SMA Negeri 1 Pacet Cianjur jurusan MIPA dan kini berprofesi
            sebagai seorang <i>content-creator, visual artist freelance,</i> dan agen narahubung di sebuah oraganisasi swasta. Ia juga tengah mengenyam pelatihan di Timedoor Academy sebagai <i>FrontEnd Developer</i>.<br /><br />
            Meskipun ia tidak memiliki gelar sarjana, tetapi ia sangat berkompeten dengan <i>soft-skill</i> SDM unggul seperti <i>critical-thinking, fast-learning,</i> kemampuan <i>public-speaking,</i> dan <i>problem-solving.</i> Ini semua
            dibuktikan dengan dapat mempelajari dasar-dasar Vue Js kurang dari dua minggu dan strategi pasarnya telah membuat ia mendapatkan banyak klien dari berbagai penjuru dunia, seperti Inggris, Amerika Serikat, hingga Belgia.
          </p>
          <p class="mt-5">
            <a class="font-red download-cv d-inline-block" ref="downloadCv" href="https://docs.google.com/document/d/1g58eWM0jJ0Z5M18E1KJG8zIPgA8n0FRZKcMR7aA9W8M/edit">
              Unduh Resume <i class="fa-solid fa-download"></i>
              <span class="slide-hover"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "about-me",
  components: {
    NavBar,
  },
};
</script>

<style scooped>
.card {
  box-shadow: var(--shadow-main);
}
.card__img {
  height: 250px;
}
.card__text {
  text-align: justify;
}
.slide-hover {
  display: block;
  width: 0;
  height: 3px;
  background-color: #cd2c08;
  transition: all 0.2s;
}
.download-cv:hover .slide-hover {
  width: 100%;
}
</style>
