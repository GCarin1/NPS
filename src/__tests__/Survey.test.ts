import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database';


describe("Surveys", () => {

    
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

   
    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to create a new survey", async () => {
       
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example1",
            description: "Description Example1",
        });

        
        expect(response.status).toBe(201);

       
    });

    it("Should be able to create a new survey", async () => {
        
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example2",
            description: "Description Example2",
        });

        
        expect(response.status).toBe(201);

       
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able get all surveys", async () => {
       
        const response = await request(app).get("/surveys");

       
        expect(response.body.length).toBe(2);
    });

});