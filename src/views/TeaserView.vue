<template>
  <audio controls autoplay loop>
    <source
      src="https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3"
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
  <div
    @click.prevent="
      playSound('https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3')
    "
  >
    <PreLoader message="You know what's cooking? BOOOOOM!" />
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "TeaserView",
  data() {
    return {
      path: "../assets/youknowwhatscooking.mp3",
    };
  },
  components: { PreLoader },
  mounted() {
    const sound =
      "https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3";
    this.playSound(sound);
  },
  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #f2f2f2;
}
</style>
