const { expect } = require('chai');
const app = require('./index');
const request = require('supertest')(app); 



describe('/api', () => {
    describe('/wrongPath', () => {
        it('GET returns 404 and error message', () => {
            return request.get('/wrongPath')
            .expect(404)
            .then(res => {
                expect(res.body.msg).to.equal('Path not found')
            })
        });
    });

   describe('/city/:city_name/users', () => {
       it('GET returns 200 and the requested users', () => {
        return request.get(`/api/city/london/users`)
        .expect(200)
        .then(({body}) => {
            expect(body.length > 0).to.be.true;
        })
       });
   });
});