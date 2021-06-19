import controller from "./user.controller";
import {Request,Response} from  "express";

const request = require('supertest')
const app = require('../../app')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/v1/user')
      expect(res.statusCode).toEqual(200)
  })
})

describe("Sum of two vaues unit test",()=>{
    it("POSITIVE : Sum of values returns correct value",()=>{
        const result = controller.sum(10,0);
        expect(result).toBe(10);
    });
});