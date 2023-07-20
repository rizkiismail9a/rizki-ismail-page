<template>
  <nav-bar />
  <div class="container max-width py-5 banner">
    <div class="row">
      <div class="col-md-4 text-center d-flex align-items-center flex-column justify-content-between p-0">
        <div>
          <a class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" href="/about-me"><i class="fa-solid fa-user"></i> About Me </a>
        </div>
        <div>
          <a class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" href="/portfolio"><i class="fa-regular fa-image"></i> Portfolio </a>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <img class="home__img rounded-circle" src="../assets/images/me.png" alt="Muhamad Rizki Ismail" width="200" />
      </div>
      <div class="col-md-4 text-center d-flex align-items-center flex-column justify-content-between p-0">
        <div>
          <a class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" href=""><i class="fa-solid fa-bell-concierge"></i> Services </a>
        </div>
        <div>
          <a class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" href="/contact-me"><i class="fa-regular fa-envelope"></i> Contact Me </a>
        </div>
      </div>
    </div>
  </div>
  <div class="identity text-center max-width container">
    <h1 class="fs-3 m-0">Muhamad Rizki Ismail</h1>
    <small>a.k.a</small>
    <h2 class="fs-4">Yuri S. Ostrovsky</h2>
    <p>FrontEnd Developer | Illustrator | Writer</p>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  name: "home-page",
};
</script>
<style scoped>
.home__button {
  width: 200px;
}

@media screen and (max-width: 480px) {
  .home__button {
    margin: 12px;
  }
}
</style>
