const assert = require('assert').strict;
const router = require('../../routes/index.js');
const request = require('supertest');

describe('GET /', () => {
    it('/にGET出来ているか', () => {
        request(router).get('/').expect(200);
    });
});