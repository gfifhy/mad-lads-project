<template>
  <!--  Design -->
  <div class="parent">
    <div class="child">
      <div class="shape-group">
        <div class="shape-el shape-1"><div></div></div>
        <div class="shape-el shape-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="shape-el shape-3">
          <div><div></div></div>
        </div>
        <div class="shape-el shape-4">
          <div></div>
          <div></div>
        </div>
        <div class="shape-el shape-5"><div></div></div>
        <div class="shape-el shape-6"><div></div></div>
        <div class="shape-el shape-7"><div></div></div>
      </div>
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "PreLoader",
  props: {
    message: String,
  },
  data() {
    return {};
  },
  methods: {
    bringToTop(shapes) {
      for (let i = 0; i < shapes.length; i++) {
        const height = shapes[i].offsetHeight;
        const rect = shapes[i].getBoundingClientRect();
        //this.shapesTop[i] = Math.ceil((rect.top + height) * -1) + "px";
        shapes[i].style.top = Math.ceil((rect.top + height) * -1) + "px";
      }
    },
    animateShapes(shapes) {
      shapes.reverse().forEach((shape) => {
        const steps = Math.abs(Math.round(parseInt(shape.style.top) / 50));
        this.animation.to(shape, {
          duration: 4,
          top: 0,
          ease: "steps(" + steps + ")",
        });
      });
      this.animation.add(
        gsap
          .timeline({ repeat: 3 })
          .to(".shape-group", { opacity: 1, duration: 0.4, ease: "steps(1)" })
          .to(".shape-group", { opacity: 0, duration: 0.4, ease: "steps(1)" })
      );
      this.animation.play();
    },
  },
  mounted() {
    this.ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray(".shape-el");
      this.animation = gsap.timeline({
        paused: true,
        repeat: -1,
        delay: 0.5,
      });
      this.bringToTop(shapes);
      this.animateShapes(shapes);
    });
  },
  unMounted() {
    this.ctx.revert();
  },
};
</script>

<style lang="scss" scoped>
$red: #e33e3f;
$black: #0d0d0d;
$white: #f2f2f2;
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #0d0d0d;
}
.center {
  position: fixed;
  img {
    width: 200px;
  }
}
.parent {
  background: $black;
  height: 100svh;
  width: 100svw;
  top: 0;
  left: 0;
  position: fixed;
  .child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
.shape-group {
  position: absolute;
  div {
    position: relative;
  }
  .shape-1 {
    left: 66px;
    div {
      background: $red;
      height: 17px;
      width: 68px;
    }
  }
  .shape-2 {
    margin-top: 16px;
    div:nth-child(1) {
      left: 50px;
      background: $red;
      width: 100px;
      height: 17px;
    }
    div:nth-child(2) {
      background: $red;
      height: 34px;
      width: 167px;
      left: 16px;
    }
    div:nth-child(3) {
      background: $black;
      width: 34px;
      height: 17px;
      margin-top: -17px;
      left: 83px;
    }
  }
  .shape-3 {
    div {
      background: $red;
      height: 33px;
      width: 200px;
      div {
        position: absolute;
        background: $black;
        height: 33px;
        width: 67px;
        left: 66px;
      }
    }
  }
  .shape-4 {
    div:nth-child(1) {
      background: $black;
      width: 34px;
      height: 17px;
      margin-bottom: -17px;
      left: 83px;
      z-index: 2;
    }
    div:nth-child(2) {
      background: $red;
      height: 34px;
      width: 200px;
    }
  }
  .shape-5 {
    div {
      background: $red;
      height: 41.5px;
      width: 200px;
    }
  }
  .shape-6 {
    div {
      background: $red;
      margin-top: 24px;
      width: 200px;
      height: 33.5px;
    }
  }
  .shape-7 {
    div {
      background: $red;
      width: 200px;
      height: 33.5px;
    }
  }
}

.message {
  color: $white;
  font-family: "Josefin Sans", serif;
  font-weight: 700;
  font-size: 25px;
  position: relative;
  top: 28%;
}
</style>
