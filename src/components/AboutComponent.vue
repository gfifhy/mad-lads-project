<template>
  <div
    class="about-container"
    data-scroll
    data-scroll-container
    data-scroll-id="about-container"
    id="about-container"
  >
    <div
      class="about-title"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#about-container"
      data-scroll-speed="2"
      data-scroll-offset="-25%"
    >
      ABOUT
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        A <span class="bold"> next-level crypto wallet </span> for all your
        needs
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack1.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        Keep <span class="bold">SOL</span> and <span class="bold">ETH</span> in
        the same wallet
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack2.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        <span class="bold">Swap</span> quickly between any tokens
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack3.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        <span class="bold">Send</span> crypto and NFTs to friend and family
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack4.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        <span class="bold">Chat, barter</span> and do more with you
        <span class="bold">NFTs</span>
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack5.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center align-items-center d-flex">
      <div
        class="col-md-6 text-container"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        <span class="bold">Play games</span> and run decentralized app in your
        wallet
      </div>
      <div
        class="col-md-5 image-container d-flex justify-content-center"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        <img src="../assets/images/backpack7.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.about-title {
  font-size: 190px;
  font-family: Gotham-black;
  color: transparent;
  -webkit-text-stroke: 1.7px rgba(5, 5, 5, 0.3);
  text-align: center;
}
.about-container {
  min-height: 100vh;
  /*background: url("../assets/images/CoralBKG.png");
  background-size: cover;*/
  background: linear-gradient(
    0deg,
    rgba(138, 137, 249, 0.85) 0%,
    rgba(98, 216, 210, 0.85) 33%,
    rgba(238, 174, 202, 0.85) 66%,
    rgba(204, 139, 241, 0.85) 100%
  );
  background-color: $black;
  .row {
    min-height: 100vh;
    .text-container {
      font-family: Gotham-light, serif;
      color: $white;
      font-size: 65px;
      padding-left: 12%;
      .bold {
        font-family: Gotham-bold, serif;
        font-weight: bolder;
      }
    }
    .image-container {
      img {
        width: 350px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .about-title {
    font-size: 80px !important;
  }
  .about-container {
    .row {
      .text-container {
        font-size: 45px;
        padding: 80px 10% !important;
        text-align: center;
        .bold {
        }
      }
      .image-container {
        img {
          padding-bottom: 50px !important;
          width: 275px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .row {
    .text-container {
      font-size: 45px !important;
      padding: 60px 2% !important;
      text-align: center;
      .bold {
      }
    }
    .image-container {
    }
  }
}
</style>
