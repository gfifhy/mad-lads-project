<template>
  <div data-scroll-container class="smooth-scroll" id="main" ref="main">
    <div data-scroll-sticky data-scroll-target="#main" class="nav-menu">
      <NavMenu />
    </div>
    <div class="parent" ref="parent">
      <div data-scroll-section data-scroll class="section1">
        <IntroComponent />
      </div>
      <div data-scroll-section data-scroll class="section2">
        <AboutComponent />
      </div>
      <div
        data-scroll-section
        data-scroll
        class="section3 pre-loader-component"
      >
        <PreLoader message="Give me whitelist plz :<" />
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavMenu from "@/components/NavMenu.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "HomeView",
  components: { PreLoader, AboutComponent, IntroComponent, NavMenu },
  created() {
    document.title = "Mad Lads | NFT";
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: this.$refs.main,
      smooth: true,
      multiplier: 0.6,
      lerp: 0.02,
      smartphone: { smooth: false, lerp: 1, multiplier: 1 },
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
.pre-loader-component {
  overflow: hidden;
  height: 100vh;
  position: relative;
}
</style>
