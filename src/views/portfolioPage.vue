<template>
  <nav-bar class="z-1" />
  <div class="container max-width m-auto my-5">
    <div class="row mx-2">
      <div class="col-sm-2">
        <div class="card border-0 text-center sidebar position-sticky d-none d-md-block" style="top: 120px">
          <div class="d-flex flex-column">
            <a href="/">
              <img src="../assets/images/logo.webp" class="sidebar__logo d-none d-md-block" alt="logo senimentari" width="110" />
            </a>
            <div class="sidebar__menu d-flex flex-column my-5">
              <a href="#illustration" class="font-red my-3"><i class="fa-solid fa-brush"></i> Illustration </a>
              <a href="#website" class="font-red my-3"><i class="fa-solid fa-globe"></i> Website </a>
              <a href="#cerpen" class="font-red my-3"><i class="fa-solid fa-book"></i> Cerpen </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-10">
        <div class="container position-relative" id="illustration">
          <div class="illustration__desc">
            <h1 class="fs-4">Visual Art</h1>
            <p>Rizki is a visual artist who actively makes content on his page in semireaslism style. Those arts below are his best those he worked either personaly or commission project, from personal use until book illustration.</p>
          </div>
          <div class="row flex-wrap illustration__img gx-2">
            <router-link
              class="w-50 font-red"
              @click="isOpen = true"
              v-for="art in arts"
              :key="art.id"
              :to="{
                name: `art-preview`,
                params: {
                  id: art.id,
                },
                query: {
                  fileName: art.fileName,
                  title: art.title,
                  desc: art.description,
                },
              }"
            >
              <div class="img__wrapper">
                <img :src="path + art.fileName" alt="yuri's art" class="w-100 object-fit-contain mb-3 rounded" />
                <p>{{ art.title }}</p>
              </div>
            </router-link>
          </div>
          <router-view v-show="isOpen" @close="isOpen = false" class="position-absolute" />
        </div>
        <div class="container" id="website">
          <div class="web__desc">
            <h1 class="fs-4">Website</h1>
            <p>As an illustrator, frontend developing is just like a heaven for Rizki. He curently uses Vue Js as his main framework</p>
          </div>
          <div class="row flex-wrap web__img gx-2">
            <a v-for="web in webs" :key="web.id" :href="web.domain" class="font-red">
              <div class="img__wrapper w-50">
                <img :src="path + web.fileName" alt="tokobukumentari landing page" class="w-100 object-fit-contain mb-3" />
                <p>{{ web.title }}</p>
              </div>
            </a>
          </div>
        </div>
        <div class="container" id="cerpen">
          <div class="illustration__desc">
            <h1 class="fs-4">Cerpen</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a reiciendis commodi earum quia inventore totam fugit velit doloremque necessitatibus.</p>
          </div>
          <div class="row flex-wrap illustration__img gx-2">
            <div class="img__wrapper w-50">
              <img src="../assets/images/singalong.webp" alt="" class="w-100 object-fit-contain mb-3" />
            </div>
            <div class="img__wrapper w-50">
              <img src="../assets/images/singalong.webp" alt="" class="w-100 object-fit-contain mb-3" />
            </div>
            <div class="img__wrapper w-50">
              <img src="../assets/images/singalong.webp" alt="" class="w-100 object-fit-contain mb-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "portfolio-page",
  data() {
    return {
      path: "/images/",
      arts: [],
      webs: [],
      cerpenCerpen: [],
      isOpen: false,
    };
  },
  components: {
    NavBar,
  },
  mounted() {
    axios
      .get("https://api.npoint.io/6e250694dadc78b3e014")
      .then((res) => {
        this.arts = res.data.illustration;
        this.webs = res.data.websites;
        this.cerpenCerpen = res.data.cerpenCerpen;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.sidebar {
  box-shadow: var(--shadow-main);
}
</style>
