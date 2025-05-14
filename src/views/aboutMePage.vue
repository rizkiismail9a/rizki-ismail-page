<template>
  <nav-bar />
  <div class="container max-width">
    <div class="card p-5 mx-3">
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            src="../assets/images/me.webp"
            alt="Muhamad Rizki Ismail"
            class="card__img object-fit-cover rounded-circle"
          />
        </div>
        <div class="col-md-8">
          <h1 class="fs-3">Muhamad Rizki Ismail</h1>
          <p class="card__text my-1">
            <span class="fw-semibold"
              >Hello! I'm Rizki, also known with my artistic name, Yuri
              Ostrovsky, a passionate frontend developer and illustrator with a
              keen eye for blending creativity and functionality. I thrive on
              bringing digital experiences to life through code and visual
              storytelling. I'm also a student of Cyber Asia University.</span
            >
          </p>
          <h2 class="fw-bold mt-4">🚀 What I Do: Frontend Development</h2>
          <p class="card__text">
            As a frontend developer, I specialize in crafting seamless and
            responsive user interfaces. My love for clean, efficient code is
            matched only by my commitment to creating web experiences that not
            only look stunning but also function flawlessly across devices.
          </p>
          <h2 class="fw-bold mt-4">🎨 What I Love: Illustration and Design</h2>
          <p class="card__text">
            Beyond the realm of coding, I'm an avid illustrator who believes in
            the power of visuals to tell compelling stories. Whether it's
            designing eye-catching graphics or illustrating characters that leap
            off the screen, I bring a unique blend of technical expertise and
            artistic flair to every project.
          </p>
          <h2 class="fw-bold mt-4">
            ✨ My Approach: Bridging Creativity and Technology
          </h2>
          <p class="card__text">
            I see technology as a canvas, and code as the paintbrush to bring
            ideas to life. I love to bridge the gap between creativity and
            technology, ensuring that each project I undertake not only meets
            technical standards but also captivates users with its aesthetic
            appeal.
          </p>
          <h2 class="fw-bold mt-4">🌟 Why Work With Me?</h2>
          <p class="card__text">
            <b>• Versatility:</b> From crafting pixel-perfect websites to
            illustrating captivating visuals, I bring a versatile skill set to
            the table. <br />
          </p>
          <p class="card__text">
            <b>• Collaborative Spirit:</b> I thrive in collaborative
            environments, valuing open communication and teamwork to achieve the
            best results.<br />
          </p>
          <p class="card__text">
            <b>• Result-Driven:</b> Every line of code and stroke of the brush
            is aimed at delivering tangible results, ensuring your project
            exceeds expectations. <br />
          </p>
          <h2 class="fw-bold mt-4">
            📚 Let's Create Something Amazing Together!
          </h2>
          <p class="card__text">
            Whether you're looking to enhance your online presence with a
            stunning website or seeking vibrant illustrations that tell your
            brand's story, I'm here to turn your vision into reality. Let's
            embark on a creative journey together! Feel free to explore my
            portfolio to witness the fusion of technology and art. If you have a
            project in mind or just want to say hello, don't hesitate to
            <router-link class="font-red" to="/contact-me">
              get in touch!
            </router-link>
          </p>
          <!-- <p class="mt-5">
            <a class="font-red download-cv d-inline-block" ref="downloadCv" href="https://docs.google.com/document/d/1g58eWM0jJ0Z5M18E1KJG8zIPgA8n0FRZKcMR7aA9W8M/edit">
              Download CV <i class="fa-solid fa-download"></i>
              <span class="slide-hover"></span>
            </a>
          </p> -->
        </div>
      </div>

      <!-- Pendidikan dan Pengalaman -->
      <div class="education-experience py-5 px-3 d-flex flex-column gap-5">
        <table class="w-100">
          <tr>
            <td class="title w-25" valign="top">💼 Experiences</td>
            <td class="d-flex flex-column gap-2">
              <div>
                <h3 class="institution">
                  LindungiHutan,
                  <span style="font-weight: normal">
                    Online &HorizontalLine; Frontend Developer
                  </span>
                </h3>
                <small class="period">November 2024 - Now </small>
                <ul>
                  <li>
                    I am responsible for developing, maintaining, and testing a
                    Progressive Web Application (PWA) using the Nuxt.js
                    framework. I ensure that users have a positive experience
                    when engaging with the company's identity, making donations,
                    leaving comments, sharing stories through environmental
                    campaigns, and participating in caring for the Earth —
                    including actions such as offsetting their carbon footprint
                    — all from the convenience of their hands.
                  </li>
                  <li>
                    I developed features using Nuxt Js and typescript. And I
                    also developed game for platform user using Pixi Js.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="institution">
                  ASDF.ID,
                  <span style="font-weight: normal">
                    Jakarta &HorizontalLine; Frontend Dev Internship
                  </span>
                </h3>
                <small class="period">Jan 2024 - Juli 2024</small>
                <ul>
                  <li>
                    I specialized in crafting visually appealing user interfaces
                    using Vue.js and TypeScript based on Figma design, connected
                    the web to API, conducted app testing using Cypress for e2e
                    and component testing.
                  </li>
                  <li>
                    I sharpened my TypeScript skills, emphasizing clean and
                    maintainable code. It also enhanced my communication and
                    teamwork abilities by actively participating in the
                    development phase between the backend developer, designer,
                    and project manager.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="institution">Illustrator Freelance,</h3>
                <small class="period">May 2020 - NOW </small>
                <ul>
                  <li>
                    I am responsible for serving customers and processing their
                    orders.
                  </li>
                  <li>
                    I gained communication and marketing skills by making sure
                    customers got the best experience while working with me.
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
        <table class="w-100">
          <tr>
            <td class="title w-25" valign="top">🎓 Education</td>
            <td class="d-flex flex-column gap-2">
              <div>
                <h3 class="institution">
                  Cyber Asia University,
                  <span style="font-weight: normal">
                    Jakarta &HorizontalLine; Informatics
                  </span>
                </h3>
                <small class="period">November 2024 - Now </small>
                <ul>
                  <li>Leader of Tes Mata Pintar PWA App project team</li>
                  <li>Created Tes Mata Pintar App and registered as HAKI</li>
                </ul>
              </div>
              <div>
                <h3 class="institution">
                  Timedoor Academy Pro,
                  <span style="font-weight: normal">
                    Online &HorizontalLine; Frontend Dev
                  </span>
                </h3>
                <small class="period">June 2023 - November 2023</small>
                <ul>
                  <li>I learned about advanced usage of HTML and Vue Js.</li>
                  <li>
                    I created web applications with auth features. Such as a
                    marketplace named Vintage App, a blog named Tasty Recipe,
                    and so on.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="institution">
                  SMAN 1 Pacet,
                  <span style="font-weight: normal">
                    Cianjur &HorizontalLine; MIPA
                  </span>
                </h3>
                <small class="period">July 2018 - July 2020</small>
                <ul>
                  <li>Vice Chief of Kelompok Ilmiah Remaja 2019.</li>
                  <li>
                    I managed to be the first student to get first place in the
                    physics olympiad.
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
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

.institution {
  font-size: 18px;
  font-weight: 700;
}

.title {
  font-size: 18px;
}
</style>
