'use strict'

const { Service } = require('egg')


const dataStore = [
    { id: '1', title: 'Read history of Node.js', completed: true },
    { id: '2', title: 'Learn koa', completed: true},
    { id: '3', title: 'Star Egg', completed: true}
]

class TodoService extends Service {
    constructor(ctx) {
        super(ctx)
        this.store = dataStore
    }

    async list(filters) {
        const { completed } = filters
        let list = this.store
        if (completed !== undefined) {
            list = list.filter(x => x.completed === completed)
        }
        return list
    }

    async get(id) {
        const index = id ? this.store.findIndex(x => x.id === id) : -1
        if (index === -1) this.ctx.throw(500, `task#${id} not found`)
        return this.store[index]
    }

    async create(todo) {
        if (!todo.title) this.ctx.throw(422, 'task title required')
        
        todo.id = Date.now().toString()
        todo.completed = false

        this.store.push(todo)
        return todo
    }

    async update(id, todo) {
        const data = await this.get(id)
        if (!todo.title)　this.ctx.throw(422, 'task title required')
        return Object.assign(data, todo)
    }

    async destroy(id) {
        const index = id ? this.store.findIndex(x => x.id === id) : -1
        if (index === -1) this.ctx.throw(500, `task#${id} not found`)
        return this.store.splice(index, 1)
    }

}

module.exports = TodoService