const mutations = {
  SET_TASKS (state, tasks) {
    state.tasks = tasks
  },
  SET_STATUS_TASK (state, { item }) {
    const tasks = state.tasks
    console.log(item)
    const taskNewStatus = tasks.map((task) => {
      if (item.id === task.id) {
        return {
          ...task,
          status: !item.status
        }
      }
      return task
    })
    console.log(taskNewStatus)
    state.tasks = taskNewStatus
  }
}

export default mutations
