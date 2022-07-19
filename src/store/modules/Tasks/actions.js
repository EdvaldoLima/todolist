import { api } from '@/api'

const actions = {
  async fetchTasks ({ commit }) {
    const { data: { tasks } } = await api.get('tasks')
    commit('SET_TASKS', tasks)
    return tasks
  },
  async patchTask ({ dispatch, state }, task) {
    const { data: { tasks } } = await api.patch(`tasks/${task.id}`, {
      task: { status: !task.status }
    })
    return tasks
  }
}

export default actions
