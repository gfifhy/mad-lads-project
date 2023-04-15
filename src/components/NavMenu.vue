<template>
  <div>
    <div class="navbar-toggler" @click="toggleMenu()">
      <img src="../assets/images/bluball.png" alt="" ref="menuIcon" />
    </div>
    <div class="nav-container" ref="navContainer">
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
          <a class="menu__item-link">NFTs</a>
          <div class="marquee">
            <div class="marquee__inner">
              <span>NFTs - NFTs - NFTs - NFTs - NFTs - NFTs - NFTs</span>
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
          <a class="menu__item-link">Whitelist me plz :&lt;</a>
          <!--          <img class="menu__item-img" src="menu-img-four.jpg" />-->
          <div class="marquee">
            <div class="marquee__inner">
              <span
                >Whitelist me plz :&lt; - Whitelist me plz :&lt; - Whitelist me
                plz :&lt; - Whitelist me plz :&lt; - Whitelist me plz :&lt; -
                Whitelist me plz :&lt; - Whitelist me plz :&lt;</span
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
    /*this.rotateBlueball = gsap.timeline({ paused: true });
    this.rotateBlueball.to(this.$refs.menuIcon, {
      rotation: -390,
      duration: 5,
      ease: "expo.out",
    });
    this.rotateBlueball.reverse();*/

    var rotateBall = gsap.timeline({ repeat: -1 });
    rotateBall.to(this.$refs.menuIcon, {
      rotation: -360,
      duration: 10,
      ease: "none",
    });
    this.tl = gsap.timeline({ paused: true });
    this.tl.to(this.$refs.navContainer, {
      duration: 1,
      left: 0,
      ease: "power1.inOut",
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
      //this.rotateBlueball.reversed(!this.rotateBlueball.reversed());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
* {
  font-family: "Josefin Sans";
  font-weight: 400;
}

.menu {
  background: $red;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
}

.navbar-toggler {
  color: #0d0d0d;
  z-index: 2;
  position: fixed;
  cursor: pointer;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
  font-size: 20px;
  img {
    width: 150px;
  }
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

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.4);
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

@media only screen and (max-width: 768px) {
  .menu {
    flex-direction: column;
    justify-content: flex-start;
    div,
    a {
      padding: 20px 0px 25px 15px;
    }
    div.marquee {
      margin-left: -30px;
    }
  }
  .navbar-toggler img {
    width: 120px;
  }
}
</style>
