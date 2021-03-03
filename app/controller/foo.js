const Controller = require('egg').Controller

class FooController extends Controller {
    async index() {
        this.ctx.body = 'hello foo'
    }
}

module.exports = FooController