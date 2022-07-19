import { Factory, Model, Server, RestSerializer } from 'miragejs'
import { faker } from '@faker-js/faker'

export const makeServer = (environment = 'development') => new Server({
  environment,
  serializers: {
    application: RestSerializer
  },
  models: {
    task: Model
  },
  seeds (server) {
    server.createList('task', 10)
  },
  factories: {
    task: Factory.extend({
      title: () => faker.vehicle.vehicle(),
      status: false
    })
  },
  routes () {
    this.urlPrefix = 'http://localhost:3333/'
    this.namespace = 'api'
    this.resource('tasks', function (schema, request) {
      const id = request.params.id
      const attrs = this.normalizedRequestAttrs()

      return schema.tasks.find(id).update(attrs)
    })
  }
})
