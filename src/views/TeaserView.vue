<template>
  <audio controls autoplay="true" loop muted="muted">
    <source
      src="https://mad-lads.epizy.com/youknowwhatscooking.mp3"
      type="audio/ogg"
    />
  </audio>
  <!--  <button
    @click.prevent="
      playSound('https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3')
    "
    style="color: white; position: relative; z-index: 99999"
  >
    play
  </button>-->
  <div>
    <PreLoader message="You know what's cooking? BOOOOOM!" />
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "TeaserView",
  components: { PreLoader },
  mounted() {
    const audio = new Audio(
      "https://mad-lads.epizy.com/youknowwhatscooking.mp3"
    );
    audio.loop = true;
    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  color: #f2f2f2;
}
</style>
