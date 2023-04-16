<template>
  <div class="intro-container d-none d-xl-flex">
    <div
      class="logo-container"
      data-scroll
      data-scroll-section
      data-scroll-speed="0.7"
      data-scroll-delay="-0.5"
    >
      <div class="logo"><img src="../assets/images/Union.png" alt="" /></div>
      <div class="logo-text">BACK <span>PACK</span></div>
    </div>
    <div class="row">
      <div
        class="col-md-6 d-flex justify-content-center align-items-center flex-column header-text-container"
      >
        <div class="header-title">
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-1"
          >
            M
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.9"
          >
            A
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.8"
          >
            D
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.7"
          >
            &nbsp;L
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.6"
          >
            A
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.5"
          >
            D
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.4"
          >
            S
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.3"
          >
            &nbsp;N
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.2"
          >
            F
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="1.7"
            data-scroll-delay="-0.1"
          >
            T
          </div>
        </div>
        <div
          class="header-subtitle"
          data-scroll
          data-scroll-section
          data-scroll-speed="1.7"
          data-scroll-delay="0.5"
        >
          Mad Lads NFT has been generating an unprecedented buzz in the world of
          NFTs, making it the most hyped NFT of the moment
        </div>
      </div>
      <div
        class="col-md-6 d-flex justify-content-center align-items-center header-image-container"
      >
        <div class="design-elements">
          <div>
            <DottedCircleShape
              shapeColor="#f62038"
              shapeWidth="400px"
              dotSize="2px"
              bgSize="16px"
            />
          </div>
          <div class="circle">
            <CircleShape shapeWidth="250px" shape-color="#f2f2f2" />
          </div>
        </div>
        <div class="image-container">
          <img
            src="../assets/images/MadLad1.png"
            alt=""
            class="dotted-circle"
            data-scroll
            data-scroll-section
            data-scroll-speed="-4"
            data-scroll-delay="0.53"
            data-scroll-direction="horizontal"
          />
          <img
            src="../assets/images/MadLad2.png"
            alt=""
            class="dotted-circle"
            data-scroll
            data-scroll-section
            data-scroll-speed="6"
            data-scroll-delay="0.05"
            data-scroll-direction="horizontal"
          />
          <br />
          <img
            src="../assets/images/MadLad3.png"
            alt=""
            class="dotted-circle"
            data-scroll
            data-scroll-section
            data-scroll-speed="-6"
            data-scroll-direction="horizontal"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="intro-container d-flex d-xl-none">
    <div class="logo-container" data-scroll>
      <div class="logo"><img src="../assets/images/Union.png" alt="" /></div>
      <div class="logo-text">BACK <span>PACK</span></div>
    </div>
    <div class="row">
      <div
        class="col-md-6 d-flex justify-content-center align-items-center flex-column header-text-container"
      >
        <div class="header-title">
          <div>M</div>
          <div>A</div>
          <div>D</div>
          <div>&nbsp;L</div>
          <div>A</div>
          <div>D</div>
          <div>S</div>
          <div>&nbsp;N</div>
          <div>F</div>
          <div>T</div>
        </div>
        <div class="header-subtitle">
          Mad Lads NFT has been generating an unprecedented buzz in the world of
          NFTs, making it the most hyped NFT of the moment
        </div>
      </div>
      <div
        class="col-md-6 d-flex justify-content-center align-items-center header-image-container"
      >
        <div class="design-elements">
          <div>
            <DottedCircleShape
              shapeColor="#f62038"
              shapeWidth="400px"
              dotSize="2px"
              bgSize="16px"
            />
          </div>
        </div>
        <div class="image-container">
          <img
            src="../assets/images/MadLad1.png"
            alt=""
            class="dotted-circle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DottedCircleShape from "@/components/elements/DottedCircleShape.vue";
import CircleShape from "@/components/elements/CircleShape.vue";

export default {
  name: "IntroComponent",
  components: { CircleShape, DottedCircleShape },
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";

.intro-container {
  position: relative;
  height: 100svh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  .logo-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    margin: 12px 70px;
    .logo {
      img {
        width: 28px;
      }
    }
    .logo-text {
      padding-top: 2px;
      color: $light-red;
      margin-left: 15px;
      font-size: 19px;
      font-family: Gotham-bold, serif;
      letter-spacing: 1.3px;
      span {
        font-family: Gotham-light, serif;
      }
    }
  }
}
.header-text-container {
  .header-title {
    display: flex;
    div {
      margin: 0px 1px;
      font-family: Duera, serif;
      font-style: italic;
      text-transform: uppercase;
      font-size: 144px;
      color: $red;
    }
  }
  .header-subtitle {
    color: $white;
    font-size: 21px;
    width: 600px;
  }
}

.header-image-container {
  .design-elements {
    position: relative;
    height: 100%;
    .dotted-circle {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .circle {
      position: absolute;
    }
  }
  .image-container {
    display: block;
    text-align: center;
    position: relative;
    width: 100%;
    img {
      width: 200px;
      clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
      margin: 20px 50px;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .logo-container {
    margin: 15px 30px !important;
    .logo-text {
      font-size: 15px !important;
    }
    .logo {
      img {
        width: 20px !important  ;
      }
    }
  }
  .intro-container {
    height: unset !important;
  }
  .header-text-container {
    margin-top: 100px;
  }
  .header-title {
    div {
      font-size: 75px !important;
    }
  }
  .header-subtitle {
    width: 100vw !important;
    padding: 0px 40px 0px 70px;
    margin-bottom: 40px;
    z-index: 1000 !important;
  }
  .circle {
    visibility: hidden;
  }
}
</style>
