const Service = require('egg').Service

class NewsService extends Service {
    async list(page = 1) {
        const { serverUrl, pageSize } = this.config.news

        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
               orderBy: '"$key"',
               startAt: `"${pageSize * (page -1)}"`,
               endAt: `"${pageSize * page -1}"`
            },
            dataType: 'json'
        })
        console.log(data)
        const newsLists = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`
                return this.ctx.curl(url, { dataType: 'json'})
            })
        )
        return newsLists.map(res => res.data)
       
    }
}

module.exports = NewsService