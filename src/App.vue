<template>
  <div class="d-flex flex-column">
    <div class="flex-grow-1 flex-shrink-1 w-100">
      <router-view></router-view>
    </div>
    <footer-part></footer-part>
  </div>
</template>

<script>
import footerPart from "./components/footerPart.vue";
export default {
  name: "App",
  components: {
    footerPart,
  },
};
</script>
<style>
.f {
  min-height: 100vh;
}
</style>
