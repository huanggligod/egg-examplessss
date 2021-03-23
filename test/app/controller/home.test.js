'use strict'

const { app, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/home.test.js', () => {
    beforeEach(() => {
        app.mockCsrf()
    })

    it('should GET /', () => {
        return app.httpRequest()
            .get('/')
            .expect('Content-type', /html/)
            .expect(200)
    })
})