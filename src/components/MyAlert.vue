<script>
export default {};
</script>

<template>
  <Teleport to="body">
    <div class="alert-wrapper" @click="$emit('closeDialog')">
      <div class="content container">
        <img src="/images/handphone.png" alt="" />
        <p>
          It seems the link to the app has been expired. <br />
          But, don't worry, you can still open the source code on GitHub
        </p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.alert-wrapper {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(198, 198, 198, 0.401);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: aliceblue;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

img {
  width: 150px;
}
</style>
