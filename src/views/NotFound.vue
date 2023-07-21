<template>
  <nav-bar />
  <div class="container max-width m-auto text-center message__wrapper">
    <h1>The Route Is Broken or Invalid</h1>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "not-found",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.message__wrapper {
  height: 50vh;
}
.message__wrapper h1 {
  line-height: 5;
}
</style>
