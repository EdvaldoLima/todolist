<template>
  <input v-model="model" type="checkbox" v-bind="$attrs"/>
</template>

<script>
export default {
  name: 'AtomCheckbox',
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
