<template>
  <nav-bar class="z-1" />
  <div class="container max-width m-auto my-5">
    <div class="row mx-2">
      <div class="col-md-2">
        <div class="card border-0 text-center sidebar position-sticky d-none d-md-block" style="top: 120px">
          <div class="d-flex flex-column">
            <a href="/">
              <img src="../assets/images/logo.webp" class="sidebar__logo m-auto" alt="logo senimentari" width="110" />
            </a>
            <div class="sidebar__menu d-flex flex-column my-5">
              <a href="#website" class="font-red my-3"><i class="fa-solid fa-globe"></i> Website </a>
              <a href="#illustration" class="font-red my-3"><i class="fa-solid fa-brush"></i> Illustration </a>
              <a href="#cerpen" class="font-red my-3"><i class="fa-solid fa-book"></i> Cerpen </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="container mb-3" id="website">
          <div class="web__desc">
            <h1 class="fs-4">Website</h1>
            <p>
              Rizki is highly passionate about web development. He spent all of his days in a week coding and adventuring new coding skills. He is now on the way to learn more about frontend web developing at Timedoor Academy, where Vue Js
              is the main framework that is learnt there. He is also on the way to learn on his own about SQL and Firebase.
            </p>
          </div>
          <div class="container row justify-content-between web__img">
            <div v-for="web in webs" :key="web.id" class="col-md-6 p-2 border-0">
              <a :href="web.domain" class="font-red">
                <div class="img__wrapper" style="width: 100%">
                  <img :src="path + web.fileName" :alt="web.fileName.split('.')[0]" class="w-100 object-fit-contain mb-3 rounded" />
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
              <p v-for="(github, name, index) in web.github" :key="index">
                <a class="font-red" :href="github">&rightarrow; See sourcecode ({{ name }}) </a> <br />
              </p>
            </div>
          </div>
        </div>
        <div class="container position-relative" id="illustration">
          <div class="illustration__desc">
            <h1 class="fs-4">Visual Art</h1>
            <p>Rizki is a visual artist who actively makes content on his page in semi realism style. Those arts below are his best, those he worked either personally or commission projects, from personal use until book illustration.</p>
          </div>
          <div class="row illustration__img gx-2">
            <router-link
              class="font-red col-md-6"
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
          <router-view v-show="isOpen" @close="isOpen = false" class="position-absolute" v-slot="{ Component }">
            <transition name="route" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
        <div class="container" id="cerpen">
          <div class="illustration__desc">
            <h1 class="fs-4">Cerpen</h1>
            <p>Rizki is a writer who loves to write short story (cerpen) in surrealism style, cultural, and/or historical genre.</p>
          </div>
          <div class="container row justify-content-between">
            <a v-for="cerpen in cerpenCerpen" :key="cerpen.id" :href="cerpen.link" class="font-red col-md-6 p-2 border-0">
              <div class="img__wrapper">
                <img :src="cerpen.fileName" :alt="cerpen.fileName.split('.')[0]" class="w-100 object-fit-contain mb-3 rounded" />
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
p {
  text-align: justify;
}
.sidebar {
  box-shadow: var(--shadow-main);
}
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.3s;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
