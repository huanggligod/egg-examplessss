'use strict'

module.exports = (option, app) => {
    return async function(ctx, next) {
        try {
            await next()
        } catch(err) {
            app.emit('error', err, this)
            const status = err.status || 500
            // 生产环境时 500错误的详情错误内容不返回给客户端，因为可能包含敏感信息
            const error = status === 500 && app.config.env === 'prod'
                ? 'Internal Server Error'
                : err.message

            ctx.body = { error }
            if (status === 422) {
                ctx.body.detail = err.errors
            }
            ctx.status = status
        }
    }
}