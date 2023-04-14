<template>
  <div class="intro-section" data-scroll-section>
    <div class="text">HOME</div>
  </div>
</template>

<script>
export default {
  name: "IntroComponent",
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
.intro-section {
  height: 100vh;
  background-image: url("~@/assets/images/grunge.png");
  background-size: contain;
}
</style>
