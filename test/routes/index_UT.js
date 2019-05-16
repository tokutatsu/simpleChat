const assert = require('assert').strict;
const router = require('../../routes/index.js');
const request = require('supertest');

describe('GET', () => {
    it('/にGET出来ているか', () => {
        request(router).get('/').expect(200);
    });
    it('/indexにGET出来ているか', () => {
        request(router).get('/index').expect(200);
    });
});

describe('POST', () => {
    it('/loginにPOST出来ているか', () => {
        request(router).post('/login').expect(200);
    });
});