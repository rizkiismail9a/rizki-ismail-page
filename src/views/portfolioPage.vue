<template>
  <nav-bar class="z-1" />
  <div id="main-content" class="container max-width m-auto my-5">
    <div class="row mx-2">
      <div class="col-md-2">
        <div
          class="card border-0 text-center sidebar position-sticky d-none d-md-block"
          style="top: 120px"
        >
          <div class="d-flex flex-column">
            <router-link to="/">
              <img
                src="../assets/images/logo.webp"
                class="sidebar__logo m-auto mb-5"
                alt="logo senimentari"
                width="110"
              />
            </router-link>
            <ul class="sidebar__menu px-3" type="none">
              <li class="text-start mb-4">
                <a href="#website" class="font-red my-3">
                  <i class="fa-solid fa-globe"></i> Website
                </a>
              </li>
              <li class="text-start mb-4">
                <a href="#illustration" class="font-red my-3">
                  <i class="fa-solid fa-brush"></i> Illustration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="container mb-3" id="website">
          <div class="web__desc">
            <h1 class="fs-4">Website</h1>
            <p>
              Rizki is highly passionate about web development. He spent all of
              his days in a week coding and adventuring for new coding skills.
              He is now on his way to learn more about frontend web development.
            </p>
          </div>

          <!-- List web yang pernah dibuat -->
          <div class="container row justify-content-between web__img">
            <div
              v-for="web in webs"
              :key="web.id"
              class="col-md-6 p-2 border-0"
            >
              <div @click="openPage(web.domain)" class="font-red">
                <div class="img__wrapper" style="width: 100%">
                  <img
                    :src="path + web.fileName"
                    :alt="web.fileName.split('.')[0]"
                    class="w-100 object-fit-contain mb-3 rounded"
                  />
                  <h2>{{ web.title }}</h2>
                  <div
                    class="tech-and-date d-flex justify-content-between mb-3"
                  >
                    <div class="tech__img">
                      <img
                        :src="tech.url"
                        alt="tech"
                        class="me-1"
                        v-for="tech in web.technologies"
                        :key="tech.url"
                        style="width: 30px"
                      />
                    </div>
                    <small>
                      <i>{{ web.dateMade }}</i>
                    </small>
                  </div>
                  <p style="color: black">{{ web.description }}</p>
                </div>
              </div>
              <p v-for="(github, name, index) in web.github" :key="index">
                <a class="font-red" :href="github">
                  &rightarrow; See sourcecode ({{ name }})
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>

        <!-- List art yang pernah dibuat -->
        <div class="container position-relative" id="illustration">
          <div class="illustration__desc">
            <h1 class="fs-4">Visual Art</h1>
            <p>
              Rizki is a visual artist who actively makes content on his page in
              a semi-realism style. Those arts below are his best, those on
              which he worked either personally or on commission projects, from
              personal use until book illustration.
            </p>
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
                <img
                  :src="path + art.fileName"
                  alt="yuri's art"
                  class="w-100 object-fit-contain mb-3 rounded"
                />
                <p>{{ art.title }}</p>
              </div>
            </router-link>
          </div>
          <router-view
            v-show="isOpen"
            @close="isOpen = false"
            class="position-absolute"
            v-slot="{ Component }"
          >
            <transition name="route" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>

  <MyAlert v-if="showAllert" @close-dialog="showAllert = false" />
</template>

<script>
import MyAlert from "@/components/MyAlert.vue";
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "portfolio-page",
  data() {
    return {
      path: "/images/",
      arts: [],
      webs: [],
      isOpen: false,
      showAllert: false,
    };
  },
  components: {
    NavBar,
    MyAlert,
  },
  mounted() {
    axios
      .get("https://api.npoint.io/6e250694dadc78b3e014")
      .then((res) => {
        this.arts = res.data.illustration;
        this.webs = res.data.websites;
      })
      .catch((err) => console.log(err));
  },

  methods: {
    openPage(link) {
      if (link.length) {
        window.open(link, "_blank");
        return;
      }

      this.showAllert = true;
    },
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

.main-content {
  overflow: hidden;
}
</style>
