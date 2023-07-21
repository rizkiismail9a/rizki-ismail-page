<template>
  <nav-bar class="z-1" />
  <div class="container max-width m-auto my-5">
    <div class="row mx-2">
      <div class="col-sm-2">
        <div class="card border-0 text-center sidebar position-sticky d-none d-md-block" style="top: 120px">
          <div class="d-flex flex-column">
            <a href="/">
              <img src="../assets/images/logo.webp" class="sidebar__logo m-auto" alt="logo senimentari" width="110" />
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
        <div class="container mb-3" id="website">
          <div class="web__desc">
            <h1 class="fs-4">Website</h1>
            <p>
              Since visual artist is Rizki's background, he is highfully passioned with frontend developing. He is able to use Bootstrap as CSS framework, Vue3 as JavaScript framework. He is also able to use git as VCS, like pull, fetch,
              merge, and so on. He is also now on the way in learning React Js and backend.
            </p>
          </div>
          <div class="d-flex web__img">
            <a v-for="web in webs" :key="web.id" :href="web.domain" class="font-red d-block w-50 p-2 card border-0 me-1">
              <div class="img__wrapper" style="width: 100%">
                <img :src="path + web.fileName" alt="tokobukumentari landing page" class="w-100 object-fit-contain mb-3 rounded" />
                <h2>{{ web.title }}</h2>
                <div class="tech-and-date d-flex justify-content-between mb-3">
                  <div class="tech__img">
                    <img :src="tech.url" alt="tech" class="me-1" v-for="tech in web.technologies" :key="tech.url" style="width: 30px" />
                  </div>
                  <small>{{ web.dateMade }}</small>
                </div>
                <p style="color: black">{{ web.description }}</p>
              </div>
            </a>
          </div>
        </div>
        <div class="container" id="cerpen">
          <div class="illustration__desc">
            <h1 class="fs-4">Cerpen</h1>
            <p>Rizki is a writer who loves to write short story (cerpen) in surealism style, cultural, and/or historical genre</p>
          </div>
          <div class="container d-flex">
            <a v-for="cerpen in cerpenCerpen" :key="cerpen.id" :href="cerpen.link" class="font-red d-block w-50 p-2 card border-0 me-1">
              <div class="img__wrapper w-100">
                <img :src="cerpen.fileName" alt="tokobukumentari landing page" class="w-100 object-fit-contain mb-3 rounded" />
                <p>{{ cerpen.title }}</p>
                <p style="color: black; text-align: justify">{{ cerpen.description }}</p>
              </div>
            </a>
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
