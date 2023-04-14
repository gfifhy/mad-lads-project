<template>
  <div
    @click.prevent="
      playSound('https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3')
    "
    class="pointer"
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
  created() {
    const sound =
      "https://cdn.whyp.it/758f596e-cf3e-49ae-a2cd-032ab74bfda6.mp3";
    this.playSound(sound);
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        //audio.loop = true;
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
.pointer {
  cursor: pointer;
}
</style>
