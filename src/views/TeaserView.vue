<template>
  <PreLoader message="You know what's cooking? BOOOOOM!" />
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "TeaserView",
  components: { PreLoader },
};
</script>

<style lang="scss" scoped>
.title {
  color: #f2f2f2;
}
</style>
