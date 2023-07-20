<template>
  <div class="container max-width position-sticky top-0">
    <nav class="navbar navbar-expand-lg m-3 rounded bg-white">
      <div class="container d-flex flex-md-row flex-column m-auto">
        <a class="navbar-brand" href="/"><img src="../assets/images/logo.webp" alt="" width="80" /></a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="navbar-nav navbar__button">
          <router-link to="/contact-me" class="btn btn-primary contact__link">Contact Me</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.navbar {
  box-shadow: var(--shadow-main);
}

@media screen and (max-width: 1000px) {
  .navbar__button {
    width: 40%;
    text-align: center;
  }
}
</style>
