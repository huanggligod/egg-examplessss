module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/foo', controller.foo.index)
    router.post('/api/body', controller.home.body)
    router.post('/api/xml', controller.home.xml)
    router.get('/news', controller.news.list)
}