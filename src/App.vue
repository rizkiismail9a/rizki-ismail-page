<template>
  <router-view />
  <footer-part></footer-part>
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
