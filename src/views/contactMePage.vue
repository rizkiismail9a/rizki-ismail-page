<template>
  <nav-bar />
  <div class="container max-width m-auto my-5">
    <div class="contact__title container w-50 m-auto p-0">
      <h4>Hubungi saya melalui</h4>
      <div class="contact__link">
        <a href="https://wa.me/6282317421414" target="__blank" class="font-red fs-3 mb-4 d-block border text-center p-0 rounded"><i class="fa-brands fa-whatsapp m-0"></i></a>
        <a href="mailto:muhamadrizkiismail9a@gmail.com" class="font-red fs-3 mb-4 d-block border text-center p-0 rounded"><i class="fa-regular fa-envelope m-0"></i></a>
        <p class="text-center">atau tulis langsung di sini</p>
      </div>
    </div>
    <div class="alert container max-width m-auto" v-if="empty === true">
      <div class="alert alert-danger w-50 text-center m-auto my-0" role="alert">nama, perihal, dan pesan tidak boleh kosong</div>
    </div>
    <form @submit.prevent="sendMail()" class="w-50 m-auto mb-5">
      <div class="mb-3">
        <label for="identity" class="form-label">Nama</label>
        <input type="text" class="form-control" id="identity" aria-describedby="emailHelp" placeholder="Individu, perusahaan, atau organisasi" />
      </div>
      <label for="subject">Perihal</label>
      <div class="form-floating">
        <select class="form-select p-2" id="subject" aria-label="Floating label select example">
          <option value="Hiring">Hiring</option>
          <option value="Order Komisi">Order Komisi</option>
          <option value="Invitation">Undangan</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="pesan" class="form-label">Pesan</label>
        <textarea class="form-control" placeholder="Tulis pesan" id="pesan" style="height: 100px"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Kirim Email</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return { empty: false };
  },
  name: "contact-me",
  components: {
    NavBar,
  },
  methods: {
    sendMail() {
      const identity = document.getElementById("identity").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("pesan").value;
      const email = "muhamadrizkiismail9a@gmail.com";
      if (identity === "" || subject === "" || message === "") {
        this.empty = true;
      } else {
        this.empty = false;
        const a = document.createElement("a");
        a.href = `mailto:${email}?subject=${subject}&body=${message}`;
        a.click();
      }
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .contact__title,
  form {
    width: 100% !important;
  }
}
</style>
