<template>
  <div class="row max-width mx-auto my-5">
    <div class="title fs-1 col-md-6">
      <h4 class="text-start font-red fw-bold">What They Say?</h4>
      <h3>What customers say about their experience with me</h3>
      <p>They say what they feel</p>
    </div>
    <div class="container col-md-6 d-flex justify-content-center align-items-center testimonials-wrapper">
      <div class="slider w-100">
        <div class="slides text-center">
          <!-- radio slider start -->
          <input type="radio" name="radio-btn" id="radio1" v-model="choosen" :value="'radio1'" />
          <input type="radio" name="radio-btn" id="radio2" v-model="choosen" :value="'radio2'" />
          <input type="radio" name="radio-btn" id="radio3" v-model="choosen" :value="'radio3'" />

          <!-- image slide -->
          <div v-for="(img, i) in images" class="slideImage" :class="{ first: i === 0 }" :key="i">
            <img :src="url + img" :alt="img.split('.')[0]" class="object-fit-cover testimoni-img" />
          </div>

          <!-- auto-nav -->
          <div class="auto-navigation">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
          </div>

          <!-- manual navigation -->
          <div class="manual-navigation">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["tes1.jpg", "tes2.jpg", "tes3.jpg"],
      url: "/images/",
      // counter: 1,
      choosen: "radio1",
    };
  },
  methods: {
    slideImages() {
      let counter = 1;
      setInterval(() => {
        this.choosen = `radio${counter}`;
        counter++;
        if (counter > 3) {
          counter = 1;
        }
      }, 5000);
    },
  },
  mounted() {
    return this.slideImages();
  },
};
</script>
<style scoped>
.title h2 {
  display: inline-block;
  width: fit-content;
  height: 100%;
}
.title p {
  font-size: 1rem;
}
.slider {
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;
}
.slides {
  width: 500%;
  height: fit-content;
  display: flex;
}
.slides input {
  display: none;
}
.slideImage {
  width: 20%;
  transition: 2s;
}
.testimoni-img {
  border-radius: 10px;
  height: 250px;
  box-shadow: var(--shadow-main);
}
/* This is for manual navigation */
.manual-navigation {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 10px;
  justify-content: center;
  gap: 30px;
}
.manual-btn {
  border: 2px solid #cd2c08;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.7s;
}
.manual-btn:hover {
  background: #cd2c08;
}
#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -20%;
}
#radio3:checked ~ .first {
  margin-left: -40%;
}
/* auto navigation */
.auto-navigation {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 10px;
  justify-content: center;
  gap: 30px;
}
.auto-navigation div {
  border: 2px solid #cd2c08;
  padding: 5px;
  border-radius: 10px;
  transition: 0.7s;
}
#radio1:checked ~ .auto-navigation .auto-btn1 {
  background: #cd2c08;
}
#radio2:checked ~ .auto-navigation .auto-btn2 {
  background: #cd2c08;
}
#radio3:checked ~ .auto-navigation .auto-btn3 {
  background: #cd2c08;
}
</style>
