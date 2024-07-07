<template>
  <nav-bar />
  <div class="container max-width m-auto my-5">
    <div class="contact__title container w-50 m-auto p-0">
      <h4>Get in touch via</h4>
      <div class="contact__link">
        <a
          href="mailto:muhamadrizkiismail9a@gmail.com"
          class="btn btn-primary font-red fs-3 mb-4 d-block border text-center p-0 rounded"
          ><i class="fa-regular fa-envelope m-0"></i
        ></a>
        <a
          href="https://x.com/senimentari_"
          class="btn btn-primary font-red fs-3 mb-4 d-block border text-center p-0 rounded"
          ><i class="fa-brands fa-x-twitter m-0"></i>
        </a>
        <a
          href="https://web.facebook.com/MentariElephant/"
          class="btn btn-primary font-red fs-3 mb-4 d-block border text-center p-0 rounded"
          ><i class="fa-brands fa-facebook-f m-0"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhamad-rizki-ismail-033a7a269"
          class="btn btn-primary font-red fs-3 mb-4 d-block border text-center p-0 rounded"
          ><i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://instagram.com/senimentari_?igshid=MzNlNGNkZWQ4Mg=="
          class="btn btn-primary font-red fs-3 mb-4 d-block border text-center p-0 rounded"
          ><i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data() {},
  name: "contact-me",
  components: {
    NavBar,
  },
  methods: {},
};
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .contact__title,
  form,
  .alert {
    width: 100% !important;
  }
}
</style>
