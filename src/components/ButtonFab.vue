<template>
  <button class="icon-link">
    <font-awesome-icon :icon="props.icon" class="fab" />
  </button>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  icon?: string
}>()

</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.icon-link {
  display: inline-flex;
  font-size: 2rem;
  text-decoration: none;
  color: $primary;
  width: 4rem;
  height: 4rem;
  transition: .5s linear;
  position: relative;
  z-index: 1;

  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;

  &:hover {
    color: $secondary;
  }
  &:hover::before {
    background: $primary;
    transform: scale(0.8);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 4rem;
    height: 4rem;
    // border-radius: 50%;
    border: 1px solid black;
    z-index: -1;
    transform: scale(0);
    transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
  }

  .fab {
    margin: auto;
  }
}
</style>
