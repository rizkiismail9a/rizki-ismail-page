<template>
  <div class="card border-0 text-center sidebar position-sticky d-none d-md-block" style="top: 120px">
    <div class="d-flex flex-column">
      <a href="/">
        <img src="../assets/images/logo.webp" class="sidebar__logo d-none d-md-block" alt="logo senimentari" width="110" />
      </a>
      <div class="sidebar__menu d-flex flex-column my-5">
        <!-- <a href="#illustration" class="font-red my-3"><i class="fa-solid fa-brush"></i> Illustration </a>
        <a href="#website" class="font-red my-3"><i class="fa-solid fa-globe"></i> Website </a>
        <a href="#cerpen" class="font-red my-3"><i class="fa-solid fa-book"></i> Cerpen </a> -->
        <a href="#cerpen" class="font-red my-3"><i class="fa-solid fa-book"></i> Cerpen </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  props: {
    link1: {
      type: String,
      required: true,
      font: "fa-brush",
    },
    link2: {
      type: String,
      required: false,
      font: "fa-globe",
    },
    link3: {
      type: String,
      required: false,
      font: "fa-book",
    },
  },
};
</script>

<style scoped>
.sidebar {
  box-shadow: var(--shadow-main);
}
</style>
