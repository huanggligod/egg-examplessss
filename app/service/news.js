const Service = require('egg').Service

class NewsService extends Service {
    async list(page = 1) {
        const { serverUrl, pageSize } = this.config.news

        const data = await this.ctx.curl(serverUrl, {
            data: {
                offset: 0,
                limit: pageSize
            }
        })
        console.log(data)
        return data
       
    }
}

module.exports = NewsService