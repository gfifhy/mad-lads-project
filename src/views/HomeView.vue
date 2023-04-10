<template>
  <div style="background: orange; z-index: 100">
    <NavMenu />
  </div>
  <div data-scroll-container>
    <section data-scroll-section>
      <h1>Scroll Smooth Testing</h1>
      <p>Ok nice</p>
    </section>
    <section
      class="section2"
      id="my-section"
      data-scroll-section
      data-scroll-speed="5"
    >
      <h1>TESTING</h1>
      <p>Ok nice</p>
      <!--      <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">😬</p>-->
    </section>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import NavMenu from "@/components/NavMenu.vue";

export default {
  name: "HomeView",
  components: { NavMenu },
  mounted() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.01,
    });

    this.scroll.on("scroll", (obj) => {
      // Your scrolling code goes here
      console.log(obj);
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
