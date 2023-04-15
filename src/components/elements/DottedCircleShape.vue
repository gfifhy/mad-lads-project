<template>
  <div class="dotted-circle"></div>
</template>

<script>
export default {
  name: "DottedCircleShape",
  props: {
    shapeColor: String,
    shapeWidth: String,
    dotSize: String,
    bgSize: String,
  },
};
</script>

<style lang="scss" scoped>
$color: v-bind(shapeColor);
$dotSize: v-bind(dotSize);
$bgSize: v-bind(bgSize);

.dotted-circle {
  width: v-bind(shapeWidth);
  height: v-bind(shapeWidth);
  background: transparent;
  background-image: radial-gradient($color $dotSize, transparent 0);
  background-size: $bgSize $bgSize;
  background-position: -19px -19px;
  border-radius: 100%;
}
</style>
