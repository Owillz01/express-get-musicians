// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician, Band } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test('can get all musicians from server', async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200); 
    })
    
    test('can get single musician from server', async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200); 
    })



     
})


describe('./bands endpoint', () => {
    // Write your tests here
    test('can get all bands from server', async () => {
        const response = await request(app).get("/bands");
        expect(response.statusCode).toBe(200); 
    })
    
    // test('can get single musician from server', async () => {
    //     const response = await request(app).get("/musicians/1");
    //     expect(response.statusCode).toBe(200); 
    // })



     
})
