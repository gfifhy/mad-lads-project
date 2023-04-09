<template>
  <div data-scroll-container>
    <section data-scroll-section>
      <h1>Scroll Smooth Testing</h1>
      <p>Ok nice</p>
    </section>
    <section class="section2" id="my-section" data-scroll-section>
      <h1>TESTING</h1>
      <p>Ok nice</p>
      <!--      <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">😬</p>-->
    </section>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
export default {
  name: "HomeView",
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  },
};
</script>

<style scoped>
@import "@/assets/css/base.css";

* {
  box-sizing: border-box;
}

section {
  height: 100vh;
  padding: 10em;
}
</style>
