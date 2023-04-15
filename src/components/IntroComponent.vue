<template>
  <div class="intro-section" data-scroll-section>
    <div class="header-container">
      <div class="landing-header">
        <div class="header-image">
          <img src="../assets/images/girl-nft.png" alt="" />
        </div>
        <div
          class="text-title"
          data-scroll
          data-scroll-section
          data-scroll-delay="2"
          data-scroll-direction="horizontal"
          data-scroll-speed="20"
        >
          MAD LADS NFT
        </div>
      </div>
      <div class="subtext"></div>
    </div>
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
  //background-image: url("~@/assets/images/grunge.png");
  //background-size: contain;
}

.header-container {
  .landing-header {
    height: 100svh;
    width: 100svw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header-image {
    img {
      width: 300px;
    }
  }
  .text-title {
    color: $red;
    font-family: Duera, serif;
    font-size: 160px;
    padding-left: 20px;
    font-style: italic;
    margin-left: -100%;
  }
}
</style>
