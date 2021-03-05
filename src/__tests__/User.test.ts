import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("Users", ()=>{
    beforeAll(async()=>{
        const connetcion= await createConnection();
        await connetcion.runMigrations();
    });
    it("should be able to create a new user", async()=>{
        const response = await request(app).post("/users").send({
            email:"user@example.com",
            name:"User Example"
        });
        expect(response.status).toBe(201);
    })
    it("should not to be able to create a user with exists emal",async()=>{
        const response = await request(app).post("/users").send({
            email:"user@example.com",
            name:"User Example"
        });
        expect(response.status).toBe(400);

    })
});