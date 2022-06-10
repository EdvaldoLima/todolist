<template>
  <div id="app">
    <TodoView></TodoView>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
