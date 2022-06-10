import { Factory, Model, Server } from 'miragejs'

export const makeServer = (environment = 'development') => new Server({
  environment,
  models: {
    task: Model
  },
  seeds (server) {
    server.createList('task', 5)
  },
  factories: {
    task: Factory.extend({
      title: 'Task',
      status: false
    })
  },
  routes () {
    this.urlPrefix = 'http://localhost:3333/'
    this.namespace = 'api'
    this.get('tasks')
  }
})
