<template>
  <nav-bar />
  <div class="container max-width">
    <div class="card p-5 mx-3">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="../assets/images/me.webp" alt="Muhamad Rizki Ismail" class="card__img object-fit-cover rounded-circle" />
        </div>
        <div class="col-md-8">
          <h1 class="fs-3">Muhamad Rizki Ismail</h1>
          <p class="card__text my-1">
            <span class="fw-semibold"
              >Hello! I'm Rizki, also known with my artistic name, Yuri Ostrovsky, a passionate frontend developer and illustrator with a keen eye for blending creativity and functionality. I thrive on bringing digital experiences to life
              through code and visual storytelling.</span
            >
          </p>
          <p class="fw-bold mt-4">🚀 What I Do: Frontend Development</p>
          <p class="card__text">
            As a frontend developer, I specialize in crafting seamless and responsive user interfaces. My love for clean, efficient code is matched only by my commitment to creating web experiences that not only look stunning but also
            function flawlessly across devices.
          </p>
          <p class="fw-bold mt-4">🎨 What I Love: Illustration and Design</p>
          <p class="card__text">
            Beyond the realm of coding, I'm an avid illustrator who believes in the power of visuals to tell compelling stories. Whether it's designing eye-catching graphics or illustrating characters that leap off the screen, I bring a
            unique blend of technical expertise and artistic flair to every project.
          </p>
          <p class="fw-bold mt-4">✨ My Approach: Bridging Creativity and Technology</p>
          <p class="card__text">
            I see technology as a canvas, and code as the paintbrush to bring ideas to life. I love to bridge the gap between creativity and technology, ensuring that each project I undertake not only meets technical standards but also
            captivates users with its aesthetic appeal.
          </p>
          <p class="fw-bold mt-4">🌟 Why Work With Me?</p>
          <p class="card__text"><b>• Versatility:</b> From crafting pixel-perfect websites to illustrating captivating visuals, I bring a versatile skill set to the table. <br /></p>
          <p class="card__text"><b>• Collaborative Spirit:</b> I thrive in collaborative environments, valuing open communication and teamwork to achieve the best results.<br /></p>
          <p class="card__text"><b>• Result-Driven:</b> Every line of code and stroke of the brush is aimed at delivering tangible results, ensuring your project exceeds expectations. <br /></p>
          <p class="fw-bold mt-4">📚 Let's Create Something Amazing Together!</p>
          <p class="card__text">
            Whether you're looking to enhance your online presence with a stunning website or seeking vibrant illustrations that tell your brand's story, I'm here to turn your vision into reality. Let's embark on a creative journey
            together! Feel free to explore my portfolio to witness the fusion of technology and art. If you have a project in mind or just want to say hello, don't hesitate to
            <router-link class="font-red" to="/contact-me">get in touch</router-link>!
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
