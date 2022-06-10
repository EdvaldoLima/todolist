<template>
  <div id="app">
    <TodoView />
  </div>
</template>

<script>
import TodoView from '@/views/TodoView.vue'

export default {
  name: 'App',
  components: { TodoView },
  async mounted () {
    await this.$api.get('tasks').then(data => {
      console.log(data)
    })
  }
}
</script>

<style lang="scss">

</style>
