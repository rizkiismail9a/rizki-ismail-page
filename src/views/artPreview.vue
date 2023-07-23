<template>
  <div class="container w-100 popUp-wrapper w-100">
    <div class="card border-0 popUp w-50 p-3 m-auto position-sticky">
      <i class="fa-solid fa-x font-red close-mark mb-3" @click="$emit('close')"></i>
      <img :src="path + $route.query.fileName" class="w-100 rounded mb-3" alt="yuri's art" />
      <h1 class="card-title fs-4">{{ $route.query.title }}</h1>
      <p>{{ $route.query.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { path: "../images/" };
  },
  emits: ["close"],
};
</script>

<style scoped>
.popUp-wrapper {
  background-color: rgba(128, 128, 128, 0.251);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.popUp {
  top: 150px;
  opacity: 1;
}
.close-mark {
  display: block;
  width: 100%;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .popUp {
    width: 100% !important;
  }
}
</style>
