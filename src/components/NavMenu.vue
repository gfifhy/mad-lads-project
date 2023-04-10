<template>
  <div>
    <div class="menu-open" @click="toggleMenu()">menu</div>
    <div class="nav-container" ref="navContainer">
      <div class="menu-close" @click="toggleMenu()">close</div>
      <div class="socials">
        <span>facebook</span>
        <span>instagram</span>
      </div>
      <nav class="menu">
        <div class="menu__item">
          <a class="menu__item-link">Home</a>
          <div class="marquee">
            <div class="marquee__inner">
              <span>Home - Home - Home - Home - Home - Home - Home</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Showcase</a>
          <div class="marquee">
            <div class="marquee__inner">
              <span
                >Showcase - Showcase - Showcase - Showcase - Showcase - Showcase
                - Showcase</span
              >
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">About</a>
          <div class="marquee">
            <div class="marquee__inner">
              <span>About - About - About - About - About - About - About</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Contact</a>
          <!--          <img class="menu__item-img" src="menu-img-four.jpg" />-->
          <div class="marquee">
            <div class="marquee__inner">
              <span
                >Contact - Contact - Contact - Contact - Contact - Contact -
                Contact</span
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "NavMenu",
  mounted() {
    this.tl = gsap.timeline({ paused: true });

    this.tl.to(this.$refs.navContainer, {
      duration: 1,
      left: 0,
      ease: "expo.out",
    });

    this.tl.staggerFrom(
      ".menu > div",
      0.8,
      { y: 100, opacity: 0, ease: "expo.out" },
      0.1,
      "-=0.4"
    );

    this.tl.staggerFrom(
      ".socials",
      0.8,
      { y: 100, opacity: 0, ease: "expo.out" },
      0.4,
      "-=0.6"
    );

    this.tl.reverse();
  },
  methods: {
    toggleMenu() {
      this.tl.reversed(!this.tl.reversed());
    },
  },
};
</script>

<style lang="css" scoped>
* {
  font-family: "Josefin Sans";
  font-weight: 400;
  color: #0d0d0d;
}

body {
  margin: 0;
  background: #161616;
}

.menu-open {
  color: #0d0d0d;
  cursor: pointer;
}

.menu-open,
.menu-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px;
  font-size: 20px;
  cursor: pointer;
}

.socials {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 40px 100px;
}

.socials span {
  text-transform: uppercase;
  margin: 0 20px;
  letter-spacing: 0px;
}

.nav-container {
  top: 0;
  position: fixed;
  left: -100%;
  width: 100%;
  height: 100vh;
  background: #fff;
}

.menu__item {
  position: relative;
  padding: 0 6vw;
}

.menu__item-link {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: opacity 0.4s;
}

.menu__item-link::before {
  all: initial;
  counter-increment: menu;
  position: absolute;
  bottom: 60%;
  left: 0;
  pointer-events: none;
}

.menu__item-link:hover {
  transition-duration: 0.1s;
  opacity: 0;
}

.menu__item-img {
  z-index: 2;
  pointer-events: none;
  position: absolute;
  height: 12vh;
  max-height: 600px;
  opacity: 0;
  left: 8%;
  top: 10%;
  transform: scale(0);
}

.menu__item-link:hover + .menu__item-img {
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s;
}

.menu {
  padding: 10vh 0 25vh;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  font-size: 7vw;
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: rgb(214, 214, 214);
  pointer-events: none;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  opacity: 0;
  transition: all 0.1s;
  transform: translateX(60px);
}

.menu__item-link:hover ~ .marquee .marquee__inner {
  opacity: 1;
  transform: translateX(0px);
  transition-duration: 0.4s;
}

.menu__item-link,
.marquee span {
  white-space: nowrap;
  font-size: 7vw;
  padding: 0 1vw;
  line-height: 1.15;
}

.marquee span {
  font-style: italic;
}
</style>
