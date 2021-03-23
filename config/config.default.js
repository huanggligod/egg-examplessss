// exports.keys = 'abc123'

// exports.view = {
//     defaultViewEngine: 'nunjucks',
//     mapping: {
//         '.tpl': 'nunjucks'
//     }
// }
// exports.news = {
//     pageSize: 5,
//     serverUrl: 'https://hacker-news.firebaseio.com/v0'
// }

// exports.security = {
//     csrf: false,
//     ctoken: false
// }
// exports.middleware = ['errorHandler', 'responseTime']

module.exports = appInfo => {
    const config = {}

    config.keys = 'abcd123'
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        } 
    }

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    }

    config.middleware = ['errorHandler', 'responseTime']

    config.security = {
        csrf: false,
        ctoken: false
    }
    config.static = true
    const userConfig = {
        responseTime: {
            headerKey: 'X-Response-Time',
        },
    }

    return {
        ...config,
        ...userConfig
    }
}