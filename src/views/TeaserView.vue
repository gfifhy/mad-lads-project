<template>
  <router-link
    :to="{ name: 'progress' }"
    style="position: relative; z-index: 99999999; color: white"
  >
    Progress
  </router-link>
  <div @click.prevent="playAudio" style="cursor: pointer">
    <PreLoader message="You know what's cooking? BOOOOOM!" />
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "TeaserView",
  components: { PreLoader },
  mounted() {},
  methods: {
    playAudio() {
      const audio = new Audio(
        "https://drive.google.com/uc?id=1QRI6JfKhessaeY_z5Sov5XVSojR6OzgA"
      );
      audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #f2f2f2;
}
</style>
