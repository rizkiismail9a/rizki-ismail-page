<template>
  <nav-bar />
  <div class="container max-width">
    <div class="card p-5 mx-3">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="../assets/images/me2.webp" alt="Muhamad Rizki Ismail" class="card__img object-fit-cover" />
        </div>
        <div class="col-md-8">
          <h1 class="fs-3">Muhamad Rizki Ismail</h1>
          <p class="card__text my-1">
            Muhamad Rizki Ismail, also known as Yuri S. Ostrovsky (pen name), is a self-taught web developer, visual artist, and cerpen writer. He is now a content creator and a freelance visual artist by profession.<br />He is also now a
            student at the Timedoor Academy Frontend Development Program in order to gain his frontend skills. He learns more about Vue Js, Firebase, responsive web design, and so on. Although he has no bachelor degree, he is a highly
            competent person with important human resource abilities such as critical thinking, fast learning, being good at public speaking, and good problem solving. Those are proven by his ability to learn basic Vue Js within less than
            two weeks, and his self-marketing strategies have brought clients from around the world, such as the UK, USA, Australia, and Belgium.
          </p>
          <p class="mt-5">
            <a class="font-red download-cv d-inline-block" ref="downloadCv" href="https://docs.google.com/document/d/1g58eWM0jJ0Z5M18E1KJG8zIPgA8n0FRZKcMR7aA9W8M/edit">
              Download CV <i class="fa-solid fa-download"></i>
              <span class="slide-hover"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "about-me",
  components: {
    NavBar,
  },
};
</script>

<style scooped>
.card {
  box-shadow: var(--shadow-main);
}
.card__img {
  height: 250px;
}
.card__text {
  text-align: justify;
}
.slide-hover {
  display: block;
  width: 0;
  height: 3px;
  background-color: #cd2c08;
  transition: all 0.2s;
}
.download-cv:hover .slide-hover {
  width: 100%;
}
</style>
