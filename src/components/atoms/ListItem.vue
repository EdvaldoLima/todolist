<template>
  <div>
    <li class="list__item">
      <div class="item__title">
        <slot name="title"></slot>
      </div>
      <div class="item__action">
        <slot name="action"></slot>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<style lang="scss" scoped>
.list__item {
  @apply flex items-center justify-between px-7 my-5 mx-5 h-20 rounded-md shadow-xl;
  @apply bg-white;
  .item__title{
    @apply text-indigo-600;
  }
  .item__action {
    @apply flex flex-row;
  }
}
</style>
