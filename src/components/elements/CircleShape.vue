<template>
  <div class="circle"></div>
</template>

<script>
export default {
  name: "CircleShape",
  props: {
    shapeColor: String,
    shapeWidth: String,
  },
};
</script>

<style lang="scss" scoped>
.circle {
  border-radius: 100%;
  background: v-bind(shapeColor);
  width: v-bind(shapeWidth);
  height: v-bind(shapeWidth);
}
</style>
