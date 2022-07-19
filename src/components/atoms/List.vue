<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AtomList'
}
</script>

<style lang="scss" scoped>
.list{
  @apply w-auto;
}
</style>
