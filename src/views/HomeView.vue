<template>
  <div data-scroll-container class="smooth-scroll" id="main" ref="main">
    <div data-scroll-sticky data-scroll-target="#main" class="nav-menu">
      <NavMenu />
    </div>
    <div class="parent" ref="parent">
      <div data-scroll-section data-scroll class="section1">
        <IntroComponent />
      </div>
      <div class="vh-100 section2">Blue</div>
      <div class="vh-100 section3">Red</div>
      <div class="vh-100 section4">Yellow</div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavMenu from "@/components/NavMenu.vue";
import IntroComponent from "@/components/IntroComponent.vue";

export default {
  name: "HomeView",
  components: { IntroComponent, NavMenu },
  created() {
    document.title = "Mad Lads | NFT";
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: this.$refs.main,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.01,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
          : scroll.scroll.instance.scroll.y;
      },
      // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.defaults({ scroller: ".smooth-scroll" });

    const container = this.$refs.parent;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        scrub: true,
        end: "bottom bottom",
      },
    });

    tl.to(
      container,
      { duration: 1, backgroundColor: "#F2F2F2", ease: "none" },
      0
    )
      .to(
        container,
        { duration: 1, backgroundColor: "#F2F2F2", ease: "none" },
        1
      )
      .to(
        container,
        { duration: 1, backgroundColor: "#F2F2F2", ease: "none" },
        2
      );
    ScrollTrigger.refresh();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/base.css";
@import "@/assets/scss/base.scss";

* {
  box-sizing: border-box;
}
.nav-menu {
  z-index: 100;
  position: sticky;
}
.vh-100 {
  height: 100svh;
  width: 100svw;
}
.parent {
  background-color: $black;
}
.section2 {
  height: 100vh;
  width: 100vw;
  background: url("../assets/images/CoralBKG.png");
}
</style>
