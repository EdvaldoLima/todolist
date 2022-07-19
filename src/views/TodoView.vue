<template>
  <div class="my-list container mx-auto">
    <h1 class="title">My Tasks</h1>
    <List>
      <template v-for="(item, index) in tasks">
        <ListItem :key="index" v-if="!item.status" :id="`listitem-${item.id}`">
          <template #title>
            {{ item.title }}
          </template>
          <template #action>
            <Checkbox @input="setStatusTask(index, item)" :value="item.status" />
          </template>
        </ListItem>
      </template>
    </List>
  </div>
</template>

<script>
import List from '@/components/atoms/List.vue'
import ListItem from '@/components/atoms/ListItem.vue'
import Checkbox from '@/components/atoms/Checkbox.vue'
export default {
  name: 'TodoView',
  components: {
    List,
    ListItem,
    Checkbox
  },
  computed: {
    tasks () {
      const tasks = this.$store.getters['Tasks/getTasks']
      return tasks
    }
  },
  mounted () {
    this.$store.dispatch('Tasks/fetchTasks')
  },
  methods: {
    async setStatusTask (index, item) {
      try {
        await this.$store.dispatch('Tasks/patchTask', item)
        document.querySelector(`#listitem-${item.id}`).setAttribute('class', 'animate__animated animate__backOutRight')
        setTimeout(() => {
          this.$store.commit('Tasks/SET_STATUS_TASK', { item })
        }, 500)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-list{
  .title{
    @apply text-3xl font-bold text-center my-10;
  }
}
</style>
