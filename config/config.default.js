exports.keys = 'abc123'

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}
exports.news = {
    pageSize: 5,
    serverUrl: 'https://zhuanlan.zhihu.com/api/columns/zhihuadmin/posts'
}