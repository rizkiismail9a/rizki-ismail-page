<template>
  <nav-bar />
  <div class="container max-width py-5 banner">
    <div class="row">
      <div class="col-md-4 text-center d-flex align-items-center flex-column justify-content-between p-0">
        <div>
          <router-link class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" to="/about-me"><i class="fa-solid fa-user"></i> About Me </router-link>
        </div>
        <div>
          <router-link class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" to="/portfolio"><i class="fa-regular fa-image"></i> Portfolio </router-link>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <img class="home__img rounded-circle" src="/images/smile.jpg" alt="Muhamad Rizki Ismail" style="width: 200px" />
      </div>
      <div class="col-md-4 text-center d-flex align-items-center flex-column justify-content-between p-0">
        <div>
          <router-link class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" to="/my-services"><i class="fa-solid fa-bell-concierge"></i> Services </router-link>
        </div>
        <div>
          <router-link class="home__button rounded-pill p-2 d-inline-block font-red btn btn-primary" ref="homeButtonRefs" to="/contact-me"><i class="fa-regular fa-envelope"></i> Contact Me </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="identity text-center max-width container d-flex flex-column align-items-center gap-3">
    <h1 class="fs-3 m-0 font-red fw-bold">Hi! I'm Rizki</h1>
    <p class="fw-bold">Frontend Developer | Illustrator | Writer</p>
    <div class="d-flex gap-3">
      <img v-for="(link, index) in technologies" :key="index" :src="link" alt="" width="30" />
    </div>
  </div>
  <div>
    <slide-show />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import slideShow from "@/components/slideShow.vue";
export default {
  components: {
    NavBar,
    slideShow,
  },
  name: "home-page",
  data() {
    return {
      technologies: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        "https://nuxt.com/assets/design-kit/icon-green.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      ],
    };
  },
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
