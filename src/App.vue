<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
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
<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.8s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
